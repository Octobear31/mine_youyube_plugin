const General = (props) => {
  return (
    <form className="flex flex-col gap-10 md:gap-12 lg:gap-12 ">
      <div className="flex gap-3 md:gap-0 lg:gap-0 flex-col md:flex-row lg:flex-row items-center justify-between md:items-baseline lg:items-baseline flex-wrap">
        <label htmlFor="pluginApi" className="basis-1/4">
          Plugin API key:
        </label>
        <div className="flex flex-col gap-1 basis-3/4 w-full">
          <input
            type="text"
            placeholder="Enter plugin API key"
            name="pluginApi"
            value={props.data.pluginApi}
            id="pluginApi"
            className="border rounded py-2 px-1 md:px-3 lg:px-3"
            onChange={props.handleInputChange}
          />
          <span className="text-sm text-gray-400">
            Insert your plugin API key
          </span>
        </div>
      </div>
      <div className="flex gap-3 md:gap-0 lg:gap-0  flex-col md:flex-row lg:flex-row items-center justify-between md:items-baseline lg:items-baseline flex-wrap">
        <label htmlFor="youtubeApi" className="basis-1/4">
          YouTube API key:
        </label>
        <div className="flex flex-col gap-1 basis-3/4 w-full">
          <input
            type="text"
            placeholder="Enter YouTube API key"
            name="youtubeApi"
            value={props.data.youtubeApi}
            id="youtubeApi"
            className="border rounded py-2 px-1 md:px-3 lg:px-3"
            onChange={props.handleInputChange}
          />
          <span className="text-sm text-gray-400">
            Insert your Youtube API key
          </span>
        </div>
      </div>
    </form>
  );
};

export default General;
