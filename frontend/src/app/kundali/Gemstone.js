import React from "react";

const Gemstone = () => {
  const gemstones = [
    {
      name: "Ruby",
      image: "/images/ruby.jpg", // Path to the image
      description:
        "Ruby is a precious gemstone that symbolizes love and passion. It is known for its vibrant red color.",
    },
    {
      name: "Emerald",
      image: "/images/emerald.jpg",
      description:
        "Emerald is a green gemstone that represents growth and prosperity. It is considered the stone of the heart.",
    },
    {
      name: "Sapphire",
      image: "/images/sapphire.jpg",
      description:
        "Sapphire is a blue gemstone known for its clarity and wisdom. It is often associated with the sky and the heavens.",
    },
    {
      name: "Amethyst",
      image: "/images/amethyst.jpg",
      description:
        "Amethyst is a purple gemstone that represents peace and calmness. It is believed to have healing properties.",
    },
    {
      name: "Topaz",
      image: "/images/topaz.jpg",
      description:
        "Topaz is a gemstone that represents strength and protection. It is known for its golden yellow color.",
    },
    {
      name: "Aquamarine",
      image: "/images/aquamarine.jpg",
      description:
        "Aquamarine is a blue-green gemstone known for its calming effects and represents serenity and clarity.",
    },
    {
      name: "Opal",
      image: "/images/opal.jpg",
      description:
        "Opal is a multicolored gemstone representing creativity and spontaneity. It is known for its dazzling color play.",
    },
    {
      name: "Garnet",
      image: "/images/garnet.jpg",
      description:
        "Garnet is a deep red gemstone known for its strength and energy. It is often associated with love and protection.",
    },
    {
      name: "Pearl",
      image: "/images/pearl.jpg",
      description:
        "Pearl is a smooth, white gemstone that symbolizes purity and elegance. It is a symbol of wealth and beauty.",
    },
    {
      name: "Diamond",
      image: "/images/diamond.jpg",
      description:
        "Diamond is a clear gemstone symbolizing strength and eternity. It is considered the hardest substance on Earth.",
    },
  ];

  return (
    <div className="w-full p-6 bg-gradient-to-r from-purple-900 via-blue-900 to-black min-h-screen">
      <h2 className="text-center text-3xl text-white mb-8 font-bold">Gemstones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {gemstones.map((gem, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            id={`gemstone-${gem.name.toLowerCase()}`}
          >
            <img
              src={gem.image}
              alt={gem.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">{gem.name}</h3>
              <p className="text-gray-300">{gem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gemstone;
