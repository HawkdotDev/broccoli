import maintainence from "../assets/image/Maintenance.jpg";
const Services = () => {
  return (
    <div className="w-screen h-screen bg-[#FFFFFF] flex items-center justify-center px-20">
      <div className="h-full w-[50%] flex flex-col justify-between p-12">
        <div className="">
          <h1 className="text-gray-500 text-4xl">
            <span className="text-black">Lorem ipsum dolor,</span>
            sit amet <br /> consectetur adipisicing.
          </h1>
          <button className="bg-green-500 p-2 rounded-full mt-5 text-white px-4">
            Get in touch
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-3">
          <div className="hover:bg-white hover:border border-black backdrop-blur-md  bg-gray-300 w-72 h-48 flex border rounded-2xl justify-around px-7 py-4 text-black items-start flex-col">
            <h1 className="text-4xl text-gray-500">
              01
            </h1>
            <h1 className="text-xl text-wrap">
              Lorem ipsum dolor sit <br /> random lines
            </h1>
            <a className="border-b text-black border-black text-xs font-semibold">
              View Details
            </a>
          </div>
          <div className="hover:bg-white hover:border border-black backdrop-blur-md  bg-gray-300 w-72 h-48 flex border rounded-2xl justify-around px-7 py-4 text-black items-start flex-col">
          <h1 className="text-4xl text-gray-500">
              02
            </h1>
            <h1 className="text-xl text-wrap">
              Lorem ipsum dolor sit <br /> random lines
            </h1>
            <a className="border-b text-black border-black text-xs font-semibold">
              View Details
            </a>
          </div>
          <div className="hover:bg-white hover:border border-black backdrop-blur-md  bg-gray-300 w-72 h-48 flex border rounded-2xl justify-around px-7 py-4 text-black items-start flex-col">
          <h1 className="text-4xl text-gray-500">
              03
            </h1>
            <h1 className="text-xl text-wrap">
              Lorem ipsum dolor sit <br /> random lines
            </h1>
            <a className="border-b text-black border-black text-xs font-semibold">
              View Details
            </a>
          </div>
          <div className="hover:bg-white hover:border border-black backdrop-blur-md  bg-gray-300 w-72 h-48 flex border rounded-2xl justify-around px-7 py-4 text-black items-start flex-col">
          <h1 className="text-4xl text-gray-500">
              04
            </h1>
            <h1 className="text-xl text-wrap">
              Lorem ipsum dolor sit <br /> random lines
            </h1>
            <a className="border-b text-black border-black text-xs font-semibold">
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="h-full w-[50%] px-6 py-14">
        <img
          src={maintainence}
          alt="Description of Image"
          className="w-full h-full object-cover rounded-2xl border border-black"
        />
      </div>
    </div>
  );
};

export default Services;
