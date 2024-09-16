import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.webp"
          alt="Kannan Karthikeyan"
          className="w-full h-full opacity-30"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[50vw]">
          Let&apos;s <span className="text-purple">build</span> something
          amazing<span className="text-purple"> together, </span>I&apos;m all
          ears
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-[60vw] sm:max-w-[50vw] md:max-w-[40vw]">
          Feel free to reach out using the below links, Let&apos;s discuss how I
          can help you bring your ideas to reality, See you there!
        </p>
        <a href="mailto:karthikeyan.k@northeastern.edu">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-12 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Kannan Karthikeyan
        </p>
      </div>
      <div className="flex mt-6 md:flex-row flex-col justify-center items-center">
        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Made with Next.JS
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
