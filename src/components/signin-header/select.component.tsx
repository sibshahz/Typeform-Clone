import { useState } from "react";
import WorldLogo from "../icons/world-logo";
import CaretIcon from "../icons/caret-icon";

const SelectComponent = () => {
  const [language, setLanguage] = useState("english");
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setDisplayMenu(!displayMenu)}
        className="flex flex-row items-center"
      >
        <div className="mr-2">
          <WorldLogo />
        </div>
        <span className="text-sm leading-normal text-select capitalize hover:text-select-hover min-w-12">
          {language}
        </span>
        <div className="ml-1">
          <CaretIcon />
        </div>
      </button>

      {displayMenu && (
        <div className="absolute top-full mt-2 shadow-lg bg-white rounded-lg py-2 text-center">
          <div
            className="capitalize flex min-h-8 cursor-pointer hover:bg-light-gray"
            onClick={() => {
              setLanguage("english"), setDisplayMenu(!displayMenu);
            }}
          >
            <span className="block py-4 px-6 font-extralight text-gray-black text-base leading-normal">
              english
            </span>
          </div>
          <div
            className="capitalize flex min-h-8 cursor-pointer hover:bg-light-gray"
            onClick={() => {
              setLanguage("español"), setDisplayMenu(!displayMenu);
            }}
          >
            <span className="block py-4 px-6 font-extralight text-gray-black text-base leading-normal">
              español
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectComponent;
