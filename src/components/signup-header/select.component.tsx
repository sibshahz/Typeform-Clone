import { useState } from "react";
import WorldLogo from "../icons/world-logo";
import CaretIcon from "../icons/caret-icon";
import { useSpring, animated } from '@react-spring/web'

const SelectComponent = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [language, setLanguage] = useState("english");
  
  const [springs, api] = useSpring(() => ({
    from: {
      scale: 0,
      opacity: 0,
    }
  }))
  
  const handleClick = () => {
    setDisplayMenu((value) => !value);
    api.start({
      from: {
        scale: displayMenu ? 1 : 0.5,
        opacity: displayMenu ? 1 : 0,
      },
      to: {
        scale: displayMenu ? 0.5 : 1,
        opacity: displayMenu ? 0 : 1,
      }
    });
  }
  return (
    <div className="relative">
      <button
        onClick={handleClick}
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

        <animated.div 
        style={{ ...springs }}
        className="absolute top-full mt-2 shadow-lg bg-white rounded-lg py-2 text-center">
          <div
            className="capitalize flex min-h-8 cursor-pointer hover:bg-light-gray"
            onClick={() => {
              setLanguage("english")
              , handleClick;
            }}
          >
            <span className="block py-4 px-6 font-extralight text-gray-black text-base leading-normal">
              english
            </span>
          </div>
          <div
            className="capitalize flex min-h-8 cursor-pointer hover:bg-light-gray"
            onClick={() => {
              setLanguage("español"), handleClick;
            }}
          >
            <span className="block py-4 px-6 font-extralight text-gray-black text-base leading-normal">
              español
            </span>
          </div>
        </animated.div>
    </div>
  );
};

export default SelectComponent;
