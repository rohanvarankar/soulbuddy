import { NextResponse } from 'next/server';

class LangflowClient {
    constructor(baseURL, applicationToken) {
        this.baseURL = baseURL;
        this.applicationToken = applicationToken;
    }

    // POST method to interact with Langflow API
    async post(endpoint, body, headers = { "Content-Type": "application/json" }) {
        headers["Authorization"] = `Bearer ${this.applicationToken}`;
        const url = `${this.baseURL}${endpoint}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                const responseMessage = await response.json();
                throw new Error(`${response.status} ${response.statusText} - ${JSON.stringify(responseMessage)}`);
            }

            return response.json();
        } catch (error) {
            console.error('Request Error:', error.message);
            throw error;
        }
    }

    // Initiate a session with Langflow API
    async initiateSession(flowId, langflowId, inputValue, inputType = 'chat', outputType = 'chat', stream = false, tweaks = {}) {
        const endpoint = `/lf/${langflowId}/api/v1/run/${flowId}?stream=${stream}`;
        return this.post(endpoint, { input_value: inputValue, input_type: inputType, output_type: outputType, tweaks });
    }

    // Handle the streaming process (for real-time updates)
    handleStream(streamUrl, onUpdate, onClose, onError) {
        const eventSource = new EventSource(streamUrl);

        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            onUpdate(data);
        };

        eventSource.onerror = (event) => {
            console.error('Stream Error:', event);
            onError(event);
            eventSource.close();
        };

        eventSource.addEventListener("close", () => {
            onClose('Stream closed');
            eventSource.close();
        });

        return eventSource;
    }

    // Run the Langflow flow (main logic)
    async runFlow(flowIdOrName, langflowId, inputValue, inputType = 'chat', outputType = 'chat', tweaks = {}, stream = false, onUpdate, onClose, onError) {
        try {
            const initResponse = await this.initiateSession(flowIdOrName, langflowId, inputValue, inputType, outputType, stream, tweaks);
            if (stream && initResponse?.outputs?.[0]?.outputs?.[0]?.artifacts?.stream_url) {
                const streamUrl = initResponse.outputs[0].outputs[0].artifacts.stream_url;
                this.handleStream(streamUrl, onUpdate, onClose, onError);
            }
            return initResponse;
        } catch (error) {
            console.error('Error running flow:', error);
            onError('Error initiating session');
        }
    }
}

export async function POST(req) {
    const { inputValue, inputType = 'chat', outputType = 'chat', stream = false } = await req.json();
    
    const flowIdOrName = '3fc5fadf-2f9e-4a5c-8707-8e2971f83257';
    const langflowId = '8e3f25a1-9ba9-4906-aaa7-88959f91921a';
    const applicationToken = 'AstraCS:JybuxzAwhooWWZDbluhRQbfW:42445812d0157a0c5780f34ab8c24f6f7b668ccfc077b8959217f0cdc56945da';
    const langflowClient = new LangflowClient('https://api.langflow.astra.datastax.com', applicationToken);

    try {
        const tweaks = {
            "ChatInput-CofNf": {},
            "ChatOutput-dh9vz": {},
            "Prompt-if3Gk": {},
            "GroqModel-DFqq7": {}
        };

        const response = await langflowClient.runFlow(
            flowIdOrName,
            langflowId,
            inputValue,
            inputType,
            outputType,
            tweaks,
            stream,
            (data) => console.log("Received:", data.chunk), // onUpdate
            (message) => console.log("Stream Closed:", message), // onClose
            (error) => console.log("Stream Error:", error) // onError
        );

        // Handle the response (non-stream case)
        if (!stream && response?.outputs) {
            const flowOutputs = response.outputs[0];
            const firstComponentOutputs = flowOutputs.outputs[0];
            const output = firstComponentOutputs.outputs.message;
            console.log("Final Output:", output.message.text);
        }

        return NextResponse.json(response);
    } catch (error) {
        console.error('API Error:', error.message);
        return NextResponse.json({ error: 'Error running the flow' }, { status: 500 });
    }
}
