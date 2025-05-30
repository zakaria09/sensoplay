"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const offerings = [
  {
    icon: "/icons/whatWeOffer/interactive-toys.png",
    title: "Interactive Toys",
    subtitle: "Engaging Experiences",
    content:
      "Experience our range of interactive toys that promote learning, creativity, and sensory development. These toys are specially crafted to enhance the playtime experience for children of all abilities, making learning enjoyable and engaging.",
  },
  {
    icon: "/icons/whatWeOffer/ARGlasses.png",
    title: "AR Glasses Interaction",
    subtitle: "Augmented Reality Fun",
    content:
      "Immerse yourself in a world of augmented reality with our toys that seamlessly interact with AI-powered glasses. Through this innovative technology, children can enjoy interactive challenges and educational content, fostering creativity and cognitive development.",
  },
  {
    icon: "/icons/whatWeOffer/feedback.png",
    title: "Feedback and Challenges",
    subtitle: "Real-time Engagement",
    content:
      "Experience our range of interactive toys that promote learning, creativity, and sensory development. These toys are specially crafted to enhance the playtime experience for children of all abilities, making learning enjoyable and engaging.",
  },
  {
    icon: "/icons/whatWeOffer/community.png",
    title: "Community Building",
    subtitle: "Supportive Networks",
    content:
      "Join our community dedicated to supporting autistic kids and their families. Discover resources, connect with other parents and carers, and share experiences in a supportive and inclusive environment that celebrates the uniqueness and potential of every child.",
  },
];

export default function AnimateCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {offerings.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </div>
  );
}

function Card({ item }) {
  const { ref, inView } = useInView({
    threshold: 0.6,
    delay: 1000,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col justify-between bg-[#FCF2E9] min-h-72 border-slate-950 border-2 border-solid drop-shadow-xl/50 px-6 py-8 text-left transition-shadow duration-500 ${
        inView ? "shadow-lg" : ""
      }`}
    >
      <div>
        <Image
          className="mb-4"
          src={item.icon}
          height={20}
          width={20}
          alt="icons"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-2 transform transition-transform duration-700">
          {item.title}
        </h3>
      </div>
      <div
        className={`bg-white rounded px-2 py-4 text-sm font-medium text-gray-800 inline-block transition-all duration-1000 ease-in-out ${
          inView
            ? "opacity-100 max-h-96 mt-4"
            : "opacity-0 max-h-0 mt-0 overflow-hidden"
        }`}
      >
        <p className="font-semibold">{item.subtitle}</p>
        <p>{item.content}</p>
      </div>
    </div>
  );
}
