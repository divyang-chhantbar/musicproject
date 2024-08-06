"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Testimonials() {
     return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
    )
}
const testimonials = [
    {
      quote:
        "Learning music with you has been an incredible journey. Your passion for teaching and your deep understanding of music theory have truly inspired me. I now look at music with a completely new perspective.",
      name: "Emma Johnson",
      title: "Piano Student",
    },
    {
      quote:
        "Your ability to break down complex pieces into manageable segments has made learning the guitar so enjoyable. I appreciate the patience and encouragement you offer in every lesson.",
      name: "Liam Smith",
      title: "Guitar Student",
    },
    {
      quote:
        "Your enthusiasm for music is infectious. You have a unique talent for making every lesson engaging and fun. Thank you for reigniting my love for singing.",
      name: "Olivia Brown",
      title: "Vocal Student",
    },
    {
      quote:
        "Working with you has been a transformative experience. Your insights into composition and your feedback have helped me grow tremendously as a songwriter.",
      name: "Noah Davis",
      title: "Songwriting Student",
    },
    {
      quote:
        "Your guidance and expertise have been invaluable. You have a remarkable ability to identify areas for improvement and provide constructive feedback that is always encouraging.",
      name: "Sophia Wilson",
      title: "Violin Student",
    },
  ];
  


