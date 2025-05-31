import React from "react";
import "./about.css";
import FadeInWrapper from "../components/animation";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[#FCF2E9] min-h-[35rem] relative bg-grid">
        <div className="container mx-auto px-4 py-38">
          <FadeInWrapper>
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="uppercase font-extrabold text-4xl mb-4">
                About Us
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                We create innovative, engaging, and inclusive toys for
                non-verbal individuals. We design products that help non-verbal
                autistic adults and children express themselves in ways that are
                both fun and meaningful.
              </p>
            </div>
          </FadeInWrapper>
        </div>
        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
          <svg
            className="w-full h-[150px] block"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,150 C480,0 960,0 1440,150 L1440,150 L0,150 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="w-full px-4 py-24">
        <div className="max-w-4xl mx-auto border border-black bg-[#FFF6F6] shadow-[6px_6px_0_0_#000] p-8 text-center">
          <FadeInWrapper>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              OUR MISSION
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Founded by someone who has taken care of a non-verbal person. Our
              toys are made to make both the person and their caregivers happy
              and relaxed. We are dedicated to making toys that are carefully
              designed for non-verbal people.
            </p>
          </FadeInWrapper>
        </div>
      </section>

      <section>
        <div className="relative bg-[url('/images/background/bg.png')] min-h-[45rem] bg-no-repeat bg-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-3xl w-full mx-auto border border-black bg-[#FFF6F6] shadow-[6px_6px_0_0_#000] p-8 text-center">
            <div className="relative z-10">
              <Image
                src="/images/whoWeAre/pin.png"
                alt="pin"
                width={50}
                height={50}
                className="inline-block left-0 absolute"
              />
              <FadeInWrapper>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
                  WHO WE ARE
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed md:max-w-3xl">
                  Founded by someone who has taken care of a non-verbal person.
                  Our toys are made to make both the person and their caregivers
                  happy and relaxed. We are dedicated to making toys that are
                  carefully designed for non-verbal people.
                </p>
              </FadeInWrapper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
