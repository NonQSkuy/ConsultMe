import React from "react";
import jun from "../../../assets/jun.png";
import alvin from "../../../assets/alvin.png";
import frenky from "../../../assets/frenky.png";
import john from "../../../assets/john.png";
import { Avatar } from "@nextui-org/react";

const About3 = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Founder
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Avatar
                size="lg"
                className="md:block hidden w-32 h-32"
                src={jun}
                alt="Alexa featured Img"
              />
              <Avatar
                className="md:hidden block"
                src={jun}
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Junthau
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Avatar
                size="lg"
                className="md:block hidden w-32 h-32"
                src={alvin}
                alt="Alexa featured Img"
              />
              <Avatar
                className="md:hidden block"
                src={alvin}
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Alvin
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Avatar
                size="lg"
                className="md:block hidden w-32 h-32"
                src={frenky}
                alt="Alexa featured Img"
              />
              <Avatar
                className="md:hidden block"
                src={frenky}
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Frenky
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Avatar
                size="lg"
                className="md:block hidden w-32 h-32"
                src={john}
                alt="Alexa featured Img"
              />
              <Avatar
                className="md:hidden block"
                src={john}
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                John
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
