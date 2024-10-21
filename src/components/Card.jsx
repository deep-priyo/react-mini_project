const Card = () => {
  return (
    <div className="parent-div w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative">
      <div className="song-icon w-20 h-20 bg-orange-600 rounded-md"></div>
      <div className="artisi-song-name">
        <h3 className="text-xl leading-none font-semibold">Song Name</h3>
        <h6 className="text-sm">Arist</h6>
      </div>
      <button className="px-3 py-2 bg-orange-600 rounded-full absolute whitespace text-zinc-100 text-xs bottom-0 translate-y-[50%] left-1/2 -translate-x-[50%]">Add To Favourites</button>
    </div>
  );
};

export default Card;
