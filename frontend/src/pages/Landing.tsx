import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import bgImage from "../assets/background.jpg";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen max-h-screen min-h-screen flex flex-col ">
      <AppBar type="landing" />
      <div
        className={`grid grid-cols-1 lg:grid-cols-3 h-full bg-no-repeat bg-cover bg-center`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="lg:col-span-2">
          <div className="flex flex-col justify-center h-full">
            <div className="flex flex-row justify-center">
              <div className="ml-5 pl-8 flex flex-col w-7.5/12">
                <div className="text-9xl font-semibold">Stay curious.</div>
                <div className="text-2xl font-semibold pt-4 mt-2">
                  Discover stories, thinking, and expertise from writers on any
                  topic.
                </div>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className="text-white bg-gray-800 mt-8 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Start Reading
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-1">
          <div></div>
        </div>
      </div>
    </div>
  );
};
