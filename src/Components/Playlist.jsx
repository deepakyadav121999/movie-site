import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const savedPlaylist = localStorage.getItem('playlist');
    if (savedPlaylist) {
      setPlaylist(JSON.parse(savedPlaylist));
    }
  }, []);

  return (
    
    <div className="flex mx-auto py-8 text-black h-auto flex-col">
      <div className="flex justify-center items-center p-2 gap-1">
      <h2 className="text-2xl font-bold  text-white">My Playlist</h2>
      <FaRegCirclePlay color="white" fontSize="1.5em"/>
      </div>
     
      {playlist.length === 0 ? (
        
        <p className="text-white">No movies in the playlist</p>
      ) : (
        <div className="flex   gap-2  items-center justify-center flex-col sm:flex-row p-2 flex-wrap">
          {playlist.map((movie, index) => (
          
            <div key={index} className=  "bg-gray-600 p-4 rounded w-full shadow md:w-1/5   flex flex-col justify-between  min-h-96  cursor-pointer  hover:scale-105" onClick={()=>{
              navigate(`/details/${movie.imdbID}`)
            }}>
              <img src={movie.Poster} alt={movie.Title} className=" w-full  min-h-60 max-h-72 max-sm:object-cover " />
              <div className="flex flex-col min-h-14 truncate">
              <h3 className="text-xl font-semibold mt-2 ttl text-gray-300">{movie.Title}</h3>
      
              </div>
           
              <div className="flex justify-between mt-2 gap-2  text-gray-300">
                <span>Year:{movie.Year}</span>
                <span>Ratiing:{movie.imdbRating}</span>
              </div>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Playlist;
