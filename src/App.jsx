import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";

const App = () => {
  //always keep data in the top level or App so it can be accessed by other components
  const data = [{ image: "https://i.scdn.co/image/ab67616d0000b27358ecb3e5ec3bbef70ee09e43", name: "Dil Mere", artist: "The Local Train", added: false }, {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzeSEssB4at1cckj-ak9883PEfZKiZmdaHHA&s", name: "Alag Aasmaan", artist: "Anuv Jain", added: false
  }, { image: "https://c.saavncdn.com/606/Aalas-Ka-Pedh-Hindi-2015-500x500.jpg", name: "Choo Lo", artist: "The Local Train", added: false }, { image: "https://c.saavncdn.com/886/Mazaak-Hindi-2023-20231003175454-500x500.jpg", name: "Maazak", artist: "Anuv Jain", added: false }, { image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Mockingbird_%28Eminem_song%29_cover.jpg/220px-Mockingbird_%28Eminem_song%29_cover.jpg", name: "Mocking Bird", artist: "Eminem", added: false }]
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
    <div className="w-full min-h-screen bg-[#FCFAEE]  " >
      <Navbar data={songData} />
      <div className="px-20 flex flex-wrap gap-10 mt-10">
        {songData.map((item, i) => (
          <Card index={i} data={item} handleClick={handleClick} />
        ))}
      </div>

    </div >
  );
};

export default App;
