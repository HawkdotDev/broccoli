import solar from "../assets/image/solar.jpg";

const HeroCard = () => {
  return (
    <div className="backdrop-blur-sm border border-gray-300/20 bg-slate-400/35 p-2 w-[40%] h-[46%] rounded-2xl flex flex-col justify-between">
              <div className="w-full h-[68%] flex justify-between">
                <img
                  src={solar}
                  alt="Description of Image"
                  className="w-[65%] h-full object-cover rounded-2xl border border-white"
                />
                <div className="w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M222.72-391.52q-36.63 0-62.68-25.99Q134-443.5 134-480q0-36.96 25.99-62.72 25.99-25.76 62.49-25.76 36.73 0 62.88 25.76 26.16 25.76 26.16 62.44 0 36.67-26.08 62.72-26.09 26.04-62.72 26.04Zm257.56 0q-36.67 0-62.72-25.99-26.04-25.99-26.04-62.49 0-36.96 25.99-62.72 25.99-25.76 62.49-25.76 36.96 0 62.72 25.76 25.76 25.76 25.76 62.44 0 36.67-25.76 62.72-25.76 26.04-62.44 26.04Zm257.4 0q-36.79 0-63-25.99-26.2-25.99-26.2-62.49 0-36.96 26.2-62.72 26.21-25.76 63-25.76 36.8 0 62.56 25.76Q826-516.96 826-480.28q0 36.67-25.76 62.72-25.76 26.04-62.56 26.04Z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-lg items-center">
                  <div className="bg-white/30 hover:bg-black/40 border border-white w-16 h-16 rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="32px"
                      viewBox="0 -960 960 960"
                      width="32px"
                      fill="#e8eaed"
                    >
                      <path d="M214.87-141.91 140.78-216l456.65-456.65H351.52v-106h426v426h-106v-245.91L214.87-141.91Z" />
                    </svg>
                  </div>
                  <div className="mx-3">
                    Discover our <br /> latest projects
                  </div>
                </div>
              </div>
            </div>
  )
}

export default HeroCard