"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { HoverEffect } from "./ui/card-hover";
import { fullStackSkills } from "@/data/index";
import { AISkills } from "@/data/index";
import { UIUXSkills } from "@/data/index";

export function Skills() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center">
        What I'm <span className="text-purple">interested</span> in
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "",
    title: "Full-Stack Development",
    src: "/full-stack.webp",
    content: <HoverEffect items={fullStackSkills}/>,
  },
  {
    category: "",
    title: "AI Engineering",
    src: "/ai.jpg",
    content: <HoverEffect items={AISkills}/>,
  },
  {
    category: "",
    title: "UI/UX Development",
    src: "/ui-2.jpg",
    content: <HoverEffect items={UIUXSkills}/>,
  },
];
