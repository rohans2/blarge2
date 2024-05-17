import { useNavigate } from "react-router-dom";

export const DropDown = ({ hidden }: { hidden: boolean }) => {
  const navigate = useNavigate();
  return (
    <div
      id="dropdownAvatar"
      className={`z-10 ${
        hidden ? "hidden" : ""
      } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 fixed top-12 right-5`}
    >
      <div className="px-4 py-3 text-sm text-gray-900 ">
        <div>Anonymous User</div>
        <div className="font-medium truncate">sample@email.com</div>
      </div>
      {/* <ul
        className="py-2 text-sm text-gray-700 "
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <a onClick={() => {

          }} className="block px-4 py-2 hover:bg-gray-100 ">
            Blogs
          </a>
        </li>
      </ul> */}
      <div
        onClick={() => {
          localStorage.clear();
          navigate("/signin");
        }}
        className="py-2 hover:bg-gray-100 "
      >
        <button className="block px-4 py-2 text-sm text-gray-700 ">
          Sign out
        </button>
      </div>
    </div>
  );
};
