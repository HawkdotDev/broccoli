import textLogo from "../assets/Company/textLogo.png";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`flex justify-center items-center py-6 flex-col px-16 bg-[#2d2929]`}
  >
    <div
      className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}
    >
      <div className="flex-[1] flex flex-col justify-start items-start mr-10">
        <img
          src={textLogo}
          alt="toast"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p
          className={`font-poppins text-2xl font-normal text-dimWhite text-[18px] leading-[30.8px]} mt-4 max-w-[312px]`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste.
        </p>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-2xl mt-6">
          Get in touch
        </button>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins text-yellow-400 font-medium text-[18px] leading-[27px]">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 toast. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
