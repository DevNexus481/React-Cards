import React from "react";

function Card() {
  const cardData = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww",
      name: "Amazon Basics.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur molestiae cupiditate excepturi.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TVVTVEFOR3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Daily Object.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur molestiae cupiditate excepturi.",
    },
    {
      image:
        "https://media.istockphoto.com/id/1782894545/photo/man-standing-on-the-building-rooftop-looking-at-the-city-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=4ZYcRfMHsYeT6FVpUTTJB5x_FOtsHT9QjBVmur0CQsk=",
      name: "Cyber Punk.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur molestiae cupiditate excepturi.",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
      {cardData.map((value, index) => (
        <div key={index} className=" w-52 bg-zinc-100  rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={value.image}
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{value.name}</h2>
            <p className="text-xs mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur molestiae cupiditate excepturi.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
