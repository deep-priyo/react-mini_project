const Navbar = ({ data }) => {  // Destructure 'data' from props
    return (
        <div className="w-full px-20 py-3 flex justify-between items-center">
            <h3>Orange</h3>
            <div className="flex py-2 px-4 bg-[#DA8359] text-zinc-200 rounded-md text-sm gap-2">
                <h3>Favourites</h3>
                {/* Correct 'length' spelling */}
                <h4>{data.filter(item => item.added).length}</h4>
            </div>
        </div>
    );
};

export default Navbar;
