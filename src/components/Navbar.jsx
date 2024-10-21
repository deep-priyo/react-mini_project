const Navbar = () => {
    return (
        <div className="w-full px-20 py-3 flex justify-between items-center">
            <h3>Orange</h3>
            <div className="flex py-2 px-4 bg-orange-600 text-zinc-200 rounded-md text-sm gap-2">
                <h3>Favourites</h3>
                <h4>2</h4>
            </div>
        </div>
    );
};

export default Navbar;
