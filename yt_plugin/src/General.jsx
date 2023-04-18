const General = (props) => {
  return (
    <form className="flex flex-col gap-12 md:gap-16 lg:gap-16 ">
      <div className=" relative flex gap-3 md:gap-0 lg:gap-0  flex-col md:flex-row lg:flex-row items-center justify-between">
        <label htmlFor="pluginApi" className="md:w-1/4 lg:w-1/4">
          Plugin API key:
        </label>
        <input
          type="text"
          placeholder="Enter plugin API key"
          name="pluginApi"
          value={props.data.pluginApi}
          id="pluginApi"
          className="border rounded py-2 px-1 md:px-3 lg:px-3 w-full md:w-3/4 lg:w-3/4"
          onChange={props.handleInputChange}
        />
        <span className="md:absolute lg:absolute left-1/4 top-12 text-sm text-gray-400">
          Insert your plugin API key
        </span>
      </div>
      <div className="relative flex gap-3 md:gap-0 lg:gap-0  flex-col md:flex-row lg:flex-row items-center justify-between">
        <label htmlFor="youtubeApi" className="md:w-1/4 lg:w-1/4">
          YouTube API key:
        </label>
        <input
          type="text"
          placeholder="Enter YouTube API key"
          name="youtubeApi"
          value={props.data.youtubeApi}
          id="youtubeApi"
          className="border rounded py-2 px-1 md:px-3 lg:px-3 w-full md:w-3/4 lg:w-3/4"
          onChange={props.handleInputChange}
        />
        <span className="md:absolute lg:absolute left-1/4 top-12 text-sm text-gray-400">
          Insert your Youtube API key
        </span>
      </div>
    </form>
  );
};

export default General;
