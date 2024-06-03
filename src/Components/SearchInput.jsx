import React, { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { inputUpdate } from "../Store/Slice/InputSlice";
import SearchBox from "./SearchBox";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [keywords, setKeywords] = useState("");
  const keyword = useSelector((state) => state.input.keyword);
  const [dataModal, setDataModal] = useState(false);
  const searchBoxRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (keyword) {
      setDataModal(true);
    }
  }, [keyword]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setDataModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search relative">
      <form
        className="flex items-center flex-row gap-2 bg-neutral-50 overflow-hidden rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(inputUpdate(keywords.trim()));
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search Any movie, series, episode"
          className="px-4 w-full min-w-[260px] sm:min-w-[350px] md:min-w-[500px] outline-none border-none text-slate-800 font-semibold text-sm placeholder:text-slate-500"
          value={keywords}
          onChange={(e) => {
            dispatch(inputUpdate(e.target.value));
            setKeywords(e.target.value);
            setDataModal(true); // Show the search box when typing
          }}
          onFocus={() => setDataModal(true)} // Show the search box when input is focused
        />
        <button
          type="submit"
          className="bg-primary py-3 px-6 text-sm font-bold"
        >
          <FaSearch />
        </button>
      </form>
      {dataModal && (
        <div ref={searchBoxRef}>
          <SearchBox setDataModal={setDataModal} dataModal={dataModal} />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
