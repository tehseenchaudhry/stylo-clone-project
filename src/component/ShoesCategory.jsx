import React from "react";
import { useParams } from "react-router-dom";

const allShoes = [
    { id: 9, name: "Black Pumps WN1008", img: "/Black Pumps 1.jpg", category: "pumps" },
    { id: 10, name: "Blue Pumps WN1036", img: "/Blue Pumps 1.jpg", category: "pumps" },
    { id: 11, name: "Maroon Pumps WN1104", img: "/Maroon Pumps 1.jpg", category: "pumps" },
    { id: 12, name: "Beige Pumps WN1013", img: "/Beige Pumps 1.jpg", category: "pumps" },
    { id: 13, name: "Grey Women Pumps WN11813", img: "/Grey Women Pumps1.jpg", category: "pumps" },
    { id: 14, name: "Brown Pumps for Women WN1185", img: "/Brown Pumps for Women1.jpg", category: "pumps" },
    { id: 15, name: "Olive Pumps For Women WN1072", img: "/Olive Pumps For Women1.jpg", category: "pumps" },
    { id: 16, name: "Pink Pumps WN1186", img: "/Pink Pumps 1.jpg", category: "pumps" },
    { id: 17, name: "Mustard Moccasin WN4415", img: "/Mustard Moccasin1.jpg", category: "moccasin" },
    { id: 18, name: "Sky Blue Moccasin WN4401", img: "/Sky Blue Moccasin1.jpg", category: "moccasin" },
    { id: 19, name: "Mehndi Moccasin WN4359", img: "/Mehndi Moccasin1.jpg", category: "moccasin" },
    { id: 20, name: "Navy Moccasin WN4457", img: "/Navy Moccasin1.jpg", category: "moccasin" },
    { id: 21, name: "Fawn Moccasin WN4459", img: "/Fawn Moccasin1.jpg", category: "moccasin" },
    { id: 22, name: "Green Moccasin WN4348", img: "/Green Moccasin1.jpg", category: "moccasin" },
    { id: 23, name: "Silver Moccasin WN4437", img: "/Silver Moccasin1.jpg", category: "moccasin" },
    { id: 24, name: "Mustard Moccasin WN4498", img: "/Mustard Moccasin 1.jpg", category: "moccasin" },
    { id: 25, name: "Silver Court Shoes WN7420", img: "/Silver Court Shoes1.jpg", category: "court shoes" },
    { id: 26, name: "Golden Women Court Shoes WN7348", img: "/Golden Women Court Shoes1.jpg", category: "court shoes" },
    { id: 27, name: "Black Court Shoes WN7393", img: "/Black Court Shoes1.jpg", category: "court shoes" },
    { id: 28, name: "Seagreen Court Shoes WN7480", img: "/Seagreen Court Shoes1.jpg", category: "court shoes" },
    { id: 230, name: "Black Court Shoes WN7371", img: "/Black Court Shoes 1.jpg", category: "court shoes" },
    { id: 31, name: "Maroon Court Shoes WN7281", img: "/Maroon Court Shoes1.jpg", category: "court shoes" },
    { id: 32, name: "Golden Women Court Shoes WN7348", img: "/Golden Women Court Shoes1.jpg", category: "court shoes" },
    { id: 33, name: "Block Heels", img: "/heel shoes.jpg", category: "heels" },
    { id: 34, name: "Party Heels", img: "/heel shoes.jpg", category: "heels" },
    { id: 35, name: "Block Heels", img: "/heel shoes.jpg", category: "heels" },
    { id: 36, name: "Block Heels", img: "/heel shoes.jpg", category: "heels" },
    { id: 37, name: "Block Heels", img: "/heel shoes.jpg", category: "heels" },
    { id: 38, name: "Block Heels", img: "/heel shoes.jpg", category: "heels" },

    { id: 39, name: "Green Casual Sneaker AT7361", img: "/Green Casual Sneaker1.jpg", category: "sneakers" },
    { id: 40, name: "Beige Casual Sneaker AT7246", img: "/Beige Casual Sneaker1.jpg", category: "sneakers" },
    { id: 41, name: "Blue Casual Sneaker For Women AT7348", img: "/Blue Casual Sneaker For Women1.jpg", category: "sneakers" },
    { id: 42, name: "Black Casual Sneaker For Ladies AT7349", img: "/Black Casual Sneaker For Ladies1.jpg", category: "sneakers" },
    { id: 43, name: "Orange Casual Sneaker For Women AT7348", img: "/Orange Casual Sneaker For Women1.jpg", category: "sneakers" },
    { id: 44, name: "Black Back Open WN5357", img: "/Black Back Open1.jpg", category: "back open" },
    { id: 45, name: "Blue Back Open WN5395", img: "/Blue Back Open1.jpg", category: "back open" },
    { id: 46, name: "Silver Back Open WN5366", img: "/Silver Back Open1.jpg", category: "back open" },
    { id: 47, name: "Green Back Open WN1200", img: "/Green Back Open1.jpg", category: "back open" },
];
const heelTypes = [
    {id:1, name: 'High Heels', img:"/High_Heels.jpg"},
    {id:2, name: 'Mid Heels', img:"/Mid_heel.jpg"},
    {id:3, name: 'Low Heels', img:"/low_heel.jpg"},
    {id:4, name: 'Flats', img:"/flats.jpg"}
]

function ShoeCategory() {
    const { category } = useParams();

    const filteredShoes = allShoes.filter(
        (shoe) => shoe.category.toLowerCase() === category.toLowerCase()
    );

      const isHeels = category.toLowerCase() === "heels";


    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 uppercase text-center">
                {category} Shoes
            </h1>

        {isHeels ? (
            <>
        <div className="flex border-2 w-[750px] mx-auto">
          {heelTypes.map((heel, index) => (
            <div
              key={index}
             className="border-2 h-[150px] w-[150px] rounded-[75px] p-1 mx-auto mt-[5px]"
            >
              <img
                src={heel.img}
                alt={heel.name}
               height={145} width={145} className="rounded-[73px]"
              />
              <p className="tracking-widest border-2 border-amber-300 text-center w-[150px] mt-3 mx-auto">{heel.name}</p>
            </div>
          ))}
        </div>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-2 border-amber-300 mt-[50px]">
        {filteredShoes.map((shoe) => (
          <div
            key={shoe.id}
            className="border p-4 rounded-lg text-center shadow-md"
          >
            <img
              src={shoe.img}
              alt={shoe.name}
              className="h-[150px] w-full object-cover mb-3"
            />
            <p>{shoe.name}</p>
          </div>
        ))}
      </div>
    </>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredShoes.map((shoe) => (
            <div
              key={shoe.id}
              className="border p-4 rounded-lg text-center shadow-md"
            >
              <img
                src={shoe.img}
                alt={shoe.name}
                className="h-[150px] w-full object-cover mb-3"
              />
              <p>{shoe.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShoeCategory;

