import { useEffect, useState } from "react";
import heartIcon from "../assets/heart.svg";
import { useFavoriteContext, useLocationContext } from "../context";

function FavLocation() {
  const [showModal, setShowModal] = useState(false);
  const { favorites } = useFavoriteContext();
  const { setSelectedLocation } = useLocationContext();
  const [val,setVal] = useState()

  console.log(typeof favorites);

  const handleChange = (fav) => {
    setSelectedLocation(fav);
    console.log(fav);
    setVal(fav)
    setShowModal(false);
  };

  useEffect(()=>{
    console.log(favorites);
  },[favorites,val])

  return (
    <>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={heartIcon} alt="" />
        <span onClick={() => setShowModal(!showModal)}>
          Favourite Locations
        </span>
      </div>

      {showModal && val && (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
          <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
          <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
            {favorites.length > 0 ? (
              favorites.map((fav, index) => (
                <li key={index} className="hover:bg-gray-200">
                  <a onClick={() => handleChange(fav)}>{fav.location}</a>
                </li>
              ))
            ) : (
              <p>Nothing is added to Favourites!</p>
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default FavLocation;
