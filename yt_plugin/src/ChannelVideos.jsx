const ChannelVideos = (props) => {
  return (
    <form className="flex flex-col gap-6 ">
      <div className="flex items-center justify-between md:justify-normal lg:justify-normal">
        <label htmlFor="thumbnail" className="w-2/5">
          Thumbnail quality:
        </label>
        <select
          name="thumbnail"
          value={props.data.thumbnail}
          id="thumbnail"
          className="border rounded py-2 px-3 w-2/4 md:w-1/4 lg:w-1/4"
          onChange={props.handleInputChange}
        >
          <option value="default">Default</option>
          <option value="standard">SD</option>
          <option value="medium">MQ</option>
          <option value="high">HQ</option>
          <option value="maxres">Max</option>
        </select>
      </div>
      <div className="flex items-center justify-between md:justify-normal lg:justify-normal">
        <label htmlFor="width" className="w-2/5">
          Width:
        </label>
        <input
          type="number"
          placeholder="320"
          name="width"
          value={props.data.width}
          id="width"
          className="border rounded py-2 px-3 w-2/4 md:w-1/4 lg:w-1/4"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="flex items-center justify-between md:justify-normal lg:justify-normal">
        <label htmlFor="height" className="w-2/5">
          Height:
        </label>
        <input
          type="number"
          placeholder="180"
          name="height"
          value={props.data.height}
          id="height"
          className="border rounded py-2 px-3 w-2/4 md:w-1/4 lg:w-1/4"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="flex items-center justify-between md:justify-normal lg:justify-normal">
        <label htmlFor="order" className="w-2/5">
          Order by:
        </label>
        <select
          name="order"
          value={props.data.order}
          id="order"
          className="border rounded py-2 px-3 w-2/4 md:w-1/4 lg:w-1/4"
          onChange={props.handleInputChange}
        >
          <option value="date">Date</option>
          <option value="rating">Rating</option>
          <option value="title">Title</option>
          <option value="viewCount">Views count</option>
        </select>
      </div>
      <div className="flex items-center justify-between md:justify-normal lg:justify-normal">
        <label htmlFor="showTitle" className="w-2/5">
          Show title:
        </label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={props.data.showTitle}
            name="showTitle"
            id="showTitle"
            className="sr-only peer"
            onChange={props.handleInputChange}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#5543a5]"></div>
        </label>
      </div>
      <div className="flex items-center justify-between md:justify-normal lg:justify-normal">
        <label htmlFor="showDuration" className="w-2/5">
          Show duration:
        </label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={props.data.showDuration}
            name="showDuration"
            id="showDuration"
            className="sr-only peer"
            onChange={props.handleInputChange}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#5543a5]"></div>
        </label>
      </div>
      <div className="flex items-center justify-between md:justify-normal lg:justify-normal">
        <label htmlFor="showViewCount" className="w-2/5">
          Show view count:
        </label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={props.data.showViewCount}
            name="showViewCount"
            id="showViewCount"
            className="sr-only peer"
            onChange={props.handleInputChange}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#5543a5]"></div>
        </label>
      </div>
      <div className="flex items-center justify-between md:justify-normal lg:justify-normal">
        <label htmlFor="showLoadMore" className="w-2/5">
          Show load more button:
        </label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={props.data.showLoadMore}
            name="showLoadMore"
            id="showLoadMore"
            className="sr-only peer"
            onChange={props.handleInputChange}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#5543a5]"></div>
        </label>
      </div>
      <div className="flex items-center justify-between md:justify-normal lg:justify-normal">
        <label htmlFor="maxResult" className="w-2/5">
          Max results:
        </label>
        <input
          type="number"
          name="maxResult"
          value={props.data.maxResult}
          id="maxResult"
          className="border rounded py-2 px-3 w-2/4 md:w-1/4 lg:w-1/4"
          onChange={props.handleInputChange}
        />
      </div>
    </form>
  );
};

export default ChannelVideos;
