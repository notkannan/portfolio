import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialMedia } from "@/data/index";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import ShootingStars from "./ui/shooting-stars";

const Hero = () => {
  return (
    <div className="pd-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full md:-left-32 md:-top-20 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center top-0 left-0 absolute">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <ShootingStars maxSpeed={5} starColor="#EDD332" trailColor="#EDD332" />

      <div className="flex justify-center relative mt-20 mb-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Hi, I'm Kannan Karthikeyan"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Innovating at the intersection of AI and Full Stack Development
          </p>
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Based in Boston, MA
          </h2>
          <a href="#projects">
            <MagicButton
              title="View my projects"
              icon={undefined}
              position={""}
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center mb-20 items-center md:gap-3 gap-6">
        {socialMedia.map((profile) => (
          <Link
            href={profile.link}
            target="_blank"
            key={profile.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <Image
              src={profile.img}
              alt="Kannan Karthikeyan"
              width={20}
              height={20}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
