import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";
import logo from "../assets/logo.png";
import { useState } from "react";
import { DropDown } from "./DropDown";

export const AppBar = ({
  type,
  username,
}: {
  type?: "landing" | "";
  username?: string;
}) => {
  const [hidden, setHidden] = useState(true);

  // useEffect(() => {
  //   const checkIfClickedOutside = (event: MouseEvent) => {
  //     if (!hidden) {
  //       setHidden(true);
  //     }
  //   };

  //   document.addEventListener("mousedown", checkIfClickedOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", checkIfClickedOutside);
  //   };
  // }, [hidden]);
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link
        className="flex flex-col justify-center cursor-pointer"
        to={"/blogs"}
      >
        <img className="w-20 h-15" src={logo}></img>
      </Link>
      <div className="flex flex-col justify-center">
        {type === "landing" ? (
          <Link to={"/signup"}>
            <button
              type="button"
              className=" mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2"
            >
              Get Started
            </button>
          </Link>
        ) : (
          <div className="flex">
            <div className="flex flex-col justify-center">
              <Link to={"/publish"}>
                <button
                  type="button"
                  className=" mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2"
                >
                  New
                </button>
              </Link>
            </div>
            <div
              onClick={() => {
                setHidden(!hidden);
              }}
              className="flex flex-col justify-center cursor-pointer "
            >
              <Avatar size={"big"} name={username || "Anonymous"} />
              <DropDown hidden={hidden} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
