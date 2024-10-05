import maintainence from "../assets/image/Maintenance.jpg";
const Services = () => {
  return (
    <div className="w-screen h-screen bg-[#2d2929] flex items-center justify-center px-20">
      <div className="h-full w-[50%] flex flex-col justify-between p-12">
        <div className="">
          <h1 className="text-gray-500 text-4xl">
            <span className="text-white">Lorem ipsum dolor,</span>
            sit amet <br /> consectetur adipisicing.
          </h1>
          <button className="bg-yellow-300 p-2 rounded-2xl mt-5 text-black px-4">
            Get in touch
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-3">
          <div className="hover:bg-gray-800 backdrop-blur-md  bg-gray-700 w-72 h-48 flex border rounded-xl justify-around p-7 text-white items-start flex-col">
            1
            <h1 className="text-xl text-wrap">
              Lorem ipsum dolor sit <br /> random lines
            </h1>
            <a className="border-b text-yellow-400 border-yellow-500">
              View Details
            </a>
          </div>
          <div className="hover:bg-gray-800 backdrop-blur-md  bg-gray-700 w-72 h-48 flex border rounded-xl justify-around p-7 text-white items-start flex-col">
            2
            <h1 className="text-xl text-wrap">
              Lorem ipsum dolor sit <br /> random lines
            </h1>
            <a className="border-b text-yellow-400 border-yellow-500">
              View Details
            </a>
          </div>
          <div className="hover:bg-gray-800 backdrop-blur-md  bg-gray-700 w-72 h-48 flex border rounded-xl justify-around p-7 text-white items-start flex-col">
            3
            <h1 className="text-xl text-wrap">
              Lorem ipsum dolor sit <br /> random lines
            </h1>
            <a className="border-b text-yellow-400 border-yellow-500">
              View Details
            </a>
          </div>
          <div className="hover:bg-gray-800 backdrop-blur-md  bg-gray-700 w-72 h-48 flex border rounded-xl justify-around p-7 text-white items-start flex-col">
            4
            <h1 className="text-xl text-wrap">
              Lorem ipsum dolor sit <br /> random lines
            </h1>
            <a className="border-b text-yellow-400 border-yellow-500">
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="h-full w-[50%] px-6 py-14">
        <img
          src={maintainence}
          alt="Description of Image"
          className="w-[75%] h-full object-cover rounded-2xl border border-white"
        />
      </div>
    </div>
  );
};

export default Services;
