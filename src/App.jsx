import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";

const App = () => {
  //always keep data in the top level or App so it can be accessed by other components
  const data = [{ image: "https://i.scdn.co/image/ab67616d0000b2730d3449f333a83a25feb423f8", name: "HUSN", artist: "Anuv Jain", added: false }, { image: "https://c.saavncdn.com/886/Mazaak-Hindi-2023-20231003175454-500x500.jpg", name: "Maazak", artist: "Anuv Jain", added: false }, { image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Mockingbird_%28Eminem_song%29_cover.jpg/220px-Mockingbird_%28Eminem_song%29_cover.jpg", name: "Mocking Bird", artist: "Eminem", added: false }, { image: "https://i.scdn.co/image/ab67616d0000b27358ecb3e5ec3bbef70ee09e43", name: "Dil Mere", artist: "The Local Train", added: false }]
  const [songData, setsongData] = useState(data);
  const handleClick = (num) => {
    setsongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (num == itemIndex)
          return { ...item, added: !item.added }
        return item
      })
    })
  }
  return (
    <div className="w-full h-full bg-[#FCFAEE]  ">
      <Navbar data={songData} />
      <div className="px-20 flex flex-wrap gap-10 mt-10">
        {songData.map((item, i) => (
          <Card index={i} data={item} handleClick={handleClick} />
        ))}
      </div>

    </div>
  );
};

export default App;
