import { useState, useEffect } from "react";
import General from "./General";
import ChannelVideos from "./ChannelVideos";

const RightSide = ({ activeTab }) => {
  const [data, setData] = useState({
    pluginApi: "",
    youtubeApi: "",
    thumbnail: "",
    width: "320",
    height: "180",
    order: "",
    showTitle: "",
    showDuration: "",
    showViewCount: "",
    showLoadMore: "",
    maxResult: "22",
  });

  const [clicked, setClicked] = useState(0);

  useEffect(() => {
    clicked > 0 &&
      (document.getElementById("dataLog").innerText = JSON.stringify(
        data,
        null,
        2
      ));
  }, [clicked]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const handleSave = () => {
    console.log(JSON.stringify(data));
    setClicked(clicked + 1);
  };

  return (
    <div className="bg-white ml-5 mb-10 rounded-lg px-8 py-6 relative shadow-md">
      {activeTab === "general" && (
        <General handleInputChange={handleInputChange} data={data} />
      )}
      {activeTab === "channel" && (
        <ChannelVideos handleInputChange={handleInputChange} data={data} />
      )}
      <div className="flex w-full justify-center  ">
        <button
          onClick={handleSave}
          className="w-1/6 bg-[#5B4E96] text-white py-2 px-4 mt-10 rounded hover:bg-[#5543a5] active:bg-purple-950 shadow-md"
        >
          Save
        </button>
      </div>
      <div
        id="dataLog"
        className={`absolute -left-1/4 ${
          activeTab === "general" ? "top-2/4" : "top-1/4"
        }`}
      ></div>
    </div>
  );
};

export default RightSide;
