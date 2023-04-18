import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className=" text-purple-950 py-6 px-6 flex justify-between">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faSliders} className="mr-2" />
        {/* <img src="logo.svg" alt="Logo" className="w-8 mr-4" /> */}
        <h1 className="font-bold text-lg uppercase">Youtube Plugin</h1>
      </div>
      <p className="text-sm">Welcome, Alex</p>
    </div>
  );
};

export default Header;
