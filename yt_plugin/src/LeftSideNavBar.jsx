import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const LeftSideNavBar = (props) => {
  return (
    <div className="bg-white flex flex-col py-4 rounded-lg text-lg shadow-md ">
      <div>
        <ul>
          <li
            onClick={() => props.setActiveTab("general")}
            className={`flex items-center justify-center gap-2 px-4 py-2 cursor-pointer rounded-lg mx-2 ${
              props.activeTab === "general" && "bg-[#5B4E96] text-white"
            }`}
          >
            <FontAwesomeIcon icon={faGear} className="md:mr-2 lg:mr-2" />
            <span className="uppercase hidden md:inline lg:inline">
              General
            </span>
          </li>
          <li
            onClick={() => props.setActiveTab("channel")}
            className={`flex items-center justify-center gap-2 px-4 py-2 cursor-pointer rounded-lg mx-2 ${
              props.activeTab === "channel" && "bg-[#5B4E96] text-white"
            }`}
          >
            <FontAwesomeIcon icon={faYoutube} className="md:mr-2 lg:mr-2" />
            <span className="uppercase hidden md:inline lg:inline">
              Channel Videos
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideNavBar;
