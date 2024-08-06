"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal"; 
const content = [
    {
      title: "Collaborative Music Lessons",
      description:
        "Work together in real time with your music students, fellow teachers, and parents. Collaborate on lesson plans, share musical pieces, and make decisions quickly. With our platform, you can streamline your teaching process and increase student engagement.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        </div>
      ),
    },
    {
      title: "Lesson Tracking",
      description:
        "Keep track of each student's progress and lesson history with ease. Our platform ensures that you're always up to date with your students' achievements, making it easier to plan future lessons and provide personalized instruction.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        </div>
      ),
    },
    {
      title: "Music Resource Library",
      description:
        "Access a wide range of musical resources, including sheet music, practice exercises, and instructional videos. Our platform ensures you have everything you need to inspire and educate your students, all in one place.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--emerald-500))] flex items-center justify-center text-white">
        </div>
      ),
    },
    {
        title: "Collaborative Music Lessons",
        description:
          "Work together in real time with your music students, fellow teachers, and parents. Collaborate on lesson plans, share musical pieces, and make decisions quickly. With our platform, you can streamline your teaching process and increase student engagement.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--emerald-500))] flex items-center justify-center text-white">
          </div>
        ),
      },
      {
        title: "Lesson Tracking",
        description:
          "Keep track of each student's progress and lesson history with ease. Our platform ensures that you're always up to date with your students' achievements, making it easier to plan future lessons and provide personalized instruction.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--yellow-500))] flex items-center justify-center text-white">
          </div>
        ),
      },
      {
        title: "Music Resource Library",
        description:
          "Access a wide range of musical resources, including sheet music, practice exercises, and instructional videos. Our platform ensures you have everything you need to inspire and educate your students, all in one place.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white">
          </div>
        ),
      },
     
     
  ];
  

  export default function WhyChooseUs () {
    return (
      <div><StickyScroll content={content}/></div>  
    )
}

