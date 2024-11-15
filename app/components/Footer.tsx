import React from "react";
import { Customer } from "../../mapscont/footerCon";
import { InformationItem } from "../../mapscont/footerCon";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="mt-10 mb-14">
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-around  w-[1200px] flex-start">
          <div className="w-[15%]">
            <h3 className="font-thin text-[18px] uppercase">about Footwear </h3>
            <div className="flex justify-center gap-4 flex-col mt-8">
              <div>
                <h3 className="text-[#b2b2be]">
                  Even the al-powerful pointing has no control about the blinds
                </h3>
              </div>

              <div className="flex justify-between items-center ">
                <div>
                  <FaTwitter color="#616161" size={20} />
                </div>
                <div>
                  <FaFacebookF color="#616161" size={20} />
                </div>
                <div>
                  <FaInstagram color="#616161" size={20} />
                </div>
                <div>
                  <FaTiktok color="#616161" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  flex-col">
            <h3 className="font-thin text-[18px] uppercase">Customer care</h3>
            <div className=" mt-8 flex gap-4 justify-center items-start flex-col">
              {Customer.map((item, index) => (
                <div key={index}>
                  <Link href={item.link}>
                    <h4 className="text-[#b2b2be]">
                      {item.name.toLocaleUpperCase()}
                    </h4>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-thin text-[18px] uppercase">information</h3>
            <div className="mt-8">
              <div className="flex gap-4 justify-center items-start flex-col">
                {InformationItem.map((item, index) => (
                  <div key={index}>
                    <Link href={item.link}>
                      <h3 className="text-[#b2b2be]">
                        {item.name.toLocaleUpperCase()}
                      </h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-thin text-[18px] uppercase">news</h3>
            <div className="mt-8 flex justify-center items-start flex-col gap-4">
              <div>
                <h3 className="text-[#b2b2be]">Blog</h3>
              </div>
              <div>
                <h3 className="text-[#b2b2be]">press</h3>
              </div>
              <div>
                <h3 className="text-[#b2b2be]">Exhibitions</h3>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-thin text-[18px] uppercase">
              contact information
            </h3>
            <div className="mt-8 flex justify-center items-start flex-col gap-4">
              <div>
                <h3 className="text-[#b2b2be]">pakistan</h3>
              </div>
              <div>
                <h3 className="text-[#b2b2be]">phone Number</h3>
                <p className="text-[#b2b2be]">12356987</p>
              </div>
              <div>
                <div>
                  <h4 className="text-[#b2b2be]">info@pakistan.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
