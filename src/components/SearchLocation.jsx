import searchSvg from "../assets/search.svg";
import { useLocationContext } from "../context";
import { getLocationByName } from "../data/data";
import { useDebounce } from "../hooks";

function SearchLocation() {
  const { setSelectedLocation } = useLocationContext();

  const doSearch = useDebounce((term) => {
    const fetchDataLocation = getLocationByName(term);
    setSelectedLocation({ ...fetchDataLocation });
  }, 500);

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          onChange={(e) => doSearch(e.target.value)}
        />
        <button type="submit">
          <img src={searchSvg} />
        </button>
      </div>
    </form>
  );
}

export default SearchLocation;
