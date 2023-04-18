const General = (props) => {
  return (
    <form className="flex flex-col gap-16 ">
      <div className=" relative flex items-center justify-between">
        <label htmlFor="pluginApi" className="w-1/4">
          Plugin API key:
        </label>
        <input
          type="text"
          placeholder="Enter plugin API key"
          name="pluginApi"
          value={props.data.pluginApi}
          id="pluginApi"
          className="border rounded py-2 px-3 w-3/4"
          onChange={props.handleInputChange}
        />
        <span className="absolute left-1/4 top-12 text-sm text-gray-400">
          Insert your plugin API key
        </span>
      </div>
      <div className="relative flex items-center justify-between">
        <label htmlFor="youtubeApi" className="w-1/4">
          YouTube API key:
        </label>
        <input
          type="text"
          placeholder="Enter YouTube API key"
          name="youtubeApi"
          value={props.data.youtubeApi}
          id="youtubeApi"
          className="border rounded py-2 px-3 w-3/4"
          onChange={props.handleInputChange}
        />
        <span className="absolute left-1/4 top-12 text-sm text-gray-400">
          Insert your Youtube API key
        </span>
      </div>
    </form>
  );
};

export default General;
