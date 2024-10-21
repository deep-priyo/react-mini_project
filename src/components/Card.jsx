const Card = ({ data, handleClick, index }) => {
  const { image, name, artist, added } = data
  return (
    <div className="parentdiv w-60 bg-[#ECDFCC] p-4 rounded-md flex gap-4 pb-8 relative mt-10">
      <div className="songIcon w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
        <img src={image} className="w-full h-full " />
      </div>
      <div className="artisi-song-name">
        <h3 className="text-xl leading-none font-semibold">{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button onClick={() => handleClick(index)} className={`px-3 py-2 ${!added ? "bg-[#DA8359]" : "bg-[#A5B68D]"} rounded-full absolute whitespace text-zinc-100 text-xs bottom-0 translate-y-[50%] left-1/2 -translate-x-[50%]`}>{!added ? "Add to Favourites" : "Favourite"}</button>

    </div>
  );
};

export default Card;
