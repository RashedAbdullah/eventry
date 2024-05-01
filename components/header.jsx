import SearchBar from "./search-bar";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-3xl">Discover Events</h1>

      <SearchBar />
    </div>
  );
};

export default Header;
