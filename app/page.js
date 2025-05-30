import Image from "next/image";
import { FaCog, FaUserAlt, FaShieldAlt, FaRegSmile } from "react-icons/fa";
import FadeInWrapper from "./components/animation";
import AnimateCards from "./components/AnimateCards";

const cards = [
  {
    id: 1,
    img: "/images/whatWeOffer/interactive.png",
    title: "Designed for Engagement",
    content:
      "We create toys and accessories that cater to the unique needs of non-verbal autistic individuals, ensuring an engaging and enjoyable experience.",
  },
  {
    id: 2,
    img: "/images/whatWeOffer/durable.png",
    title: "Built for Ease",
    content:
      "Our products are designed with practicality in mind—built to last, effortless to use, and easy to maintain for both individuals and caregivers.",
  },
  {
    id: 3,
    img: "/images/whatWeOffer/caregiver.png",
    title: "Caregiver-Friendly",
    content:
      "We consider the needs of both non-verbal individuals and their caregivers, creating toys that bring comfort, joy, and ease into daily life.",
  },
];

const approach = [
  {
    id: 1,
    img: "/images/ourApproach/design.png",
    title: "User-Centered Design",
    content:
      "We focus on intuitive, easy-to-use, and engaging designs that meet the needs of both users and caregivers.",
  },
  {
    id: 2,
    img: "/images/ourApproach/inclusion.png",
    title: "Inclusive Innovation",
    content:
      "Our toys integrate sensory-friendly materials and technology to ensure accessibility for all.",
  },
  {
    id: 3,
    img: "/images/ourApproach/community.png",
    title: "Community Engagement",
    content:
      "We collaborate with therapists, educators, and families to refine our products based on real-world feedback",
  },
];

const values = [
  {
    id: 1,
    icon: "/images/ourValues/safety.png",
    title: "Safety and Durability",
    content:
      "Risk-free toys, safer and made for quality material for long durable toys.",
  },
  {
    id: 2,
    icon: "/images/ourValues/sustainable.png",
    title: "Sustainable",
    content: "Eco-friendly toys, plastic free, and socially responsible.",
  },
  {
    id: 3,
    icon: "/images/ourValues/community.png",
    title: "Community",
    content: "Designed in community, for community benefits.",
  },
  {
    id: 4,
    icon: "/images/ourValues/inclusion.png",
    title: "Inclusion",
    content:
      "Inclusive design and educational positioning, to integrate the entire community.",
  },
  {
    id: 5,
    icon: "/images/ourValues/fun.png",
    title: "Fun and Development",
    content:
      "Sensory, happy, fun and educational. Capable of entertaining at the same time that develops.",
  },
  {
    id: 6,
    icon: "/images/ourValues/practicality.png",
    title: "Practicality",
    content: "Easy to play and easy to clean.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ead9d7da_1px,transparent_1px),linear-gradient(to_bottom,#ead9d7da_1px,transparent_1px)] bg-[size:6rem_4rem] mask-[radial-gradient(circle_at_center,transparent_0%,black_70%)]"></div>
        <div className="container mx-auto">
          <FadeInWrapper>
            <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 ">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                INNOVATIVE
              </h1>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                INTERACTIVE TOYS
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Enhancing Playful Learning Experiences
              </p>

              <button className="flex items-center gap-2 bg-[#C1D81D] text-black cursor-pointer font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#d4e171] transition mb-12">
                <span className="text-2xl">
                  <Image
                    src="/icons/faces-icon.png"
                    alt="Arrow Right"
                    width={74}
                    height={74}
                    className="inline-block"
                  />
                </span>{" "}
                Join Our Waitlist
              </button>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
                <div className="flex flex-col items-center text-center">
                  <FaCog className="text-3xl text-rose-200 mb-2" />
                  <p className="text-sm font-medium">
                    SCIENCE-BACKED
                    <br />
                    DESIGN
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaUserAlt className="text-3xl text-purple-200 mb-2" />
                  <p className="text-sm font-medium">
                    DESIGNED TO LAST
                    <br />
                    AND A TICK
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaShieldAlt className="text-3xl text-green-200 mb-2" />
                  <p className="text-sm font-medium">
                    INCLUSIVE FOR ALL
                    <br />
                    MINDS
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaRegSmile className="text-3xl text-sky-200 mb-2" />
                  <p className="text-sm font-medium">
                    ENCOURAGES
                    <br />
                    MOOD REGULATION
                  </p>
                </div>
              </div>
            </div>
          </FadeInWrapper>
        </div>
      </section>

      <section className="relative bg-[#FCF2E9] text-center py-62 px-4">
        <div className="container mx-auto">
          {/* Sparkles */}
          <Image
            src={"/icons/stars.png"}
            width={50}
            height={50}
            alt="Sparkles"
            className="absolute top-8 md:top-38 md:left-8 text-blue-900 text-2xl sm:text-3xl rotate-45"
          />
          <Image
            src={"/icons/stars.png"}
            width={50}
            height={50}
            alt="Sparkles"
            className="absolute bottom-8 md:bottom-16 left-18 text-blue-900 text-2xl sm:text-3xl rotate-45"
          />
          <Image
            src={"/icons/stars.png"}
            width={50}
            height={50}
            alt="Sparkles"
            className="absolute bottom-8 right-12 text-blue-900 text-2xl sm:text-3xl rotate-45"
          />

          <FadeInWrapper>
            {/* Text */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
                WE DESIGN TOYS THAT LAST
                <br />
                <span className="inline-block ">
                  FOR{" "}
                  <span className="text-[#7c8725] text-shadow-md my-4">
                    NON-VERBAL PEOPLE{" "}
                  </span>
                  <br />
                  <p>WITH COMPLEX NEEDS</p>
                </span>
              </h2>
            </div>
          </FadeInWrapper>
        </div>
      </section>

      <section className="container mx-auto ">
        <main className="py-24 px-4 text-center">
          <FadeInWrapper>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              WHAT WE OFFER?
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
              Dive into our collection of innovative sensory toys that provide
              real-time feedback and challenges through augmented reality. Each
              product is designed to engage and support autistic children,
              parents, and carers in a fun and meaningful way.
            </p>
          </FadeInWrapper>

          <FadeInWrapper>
            <AnimateCards />
          </FadeInWrapper>
        </main>
      </section>

      <section className="container mx-auto">
        <main className="py-24 px-4 text-center">
          <FadeInWrapper>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
              We consider the needs of both the carer and the non-verbal
              recipient when designing our products.
            </p>
          </FadeInWrapper>

          <FadeInWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto justify-items-center">
              {cards.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-between max-w-[320px] border-slate-950 border-2 border-solid text-left bg-white shadow-[6px_6px_0px_#888888]"
                >
                  <div className="bg-[#FCF2E9]">
                    <Image
                      className=""
                      src={item.img}
                      height={288}
                      width={358}
                      alt="icons"
                    />
                  </div>
                  <div className="px-4 py-2 flex flex-col justify-between">
                    <h3 className="py-4 text-xl font-semibold text-gray-900 ">
                      {item.title}
                    </h3>
                    <p className="pb-2 font-medium text-gray-800">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInWrapper>
        </main>
      </section>

      <section className="container mx-auto ">
        <main className="py-24 px-4 text-center">
          <FadeInWrapper>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
              We consider the needs of both the carer and the non-verbal
              recipient when designing our products.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto justify-items-center">
              {approach.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-between py-8 bg-white "
                >
                  <Image
                    className="self-center"
                    src={item.img}
                    height={150}
                    width={150}
                    alt="icons"
                  />
                  <div className="px-4 py-2 flex flex-col justify-between">
                    <h3 className="py-4 text-xl font-semibold text-gray-900 ">
                      {item.title}
                    </h3>
                    <p className="pb-2 font-medium text-gray-800">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInWrapper>
        </main>
      </section>

      <section className="container mx-auto px-4 py-24">
        <FadeInWrapper>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              We consider the needs of both the carer and the non-verbal
              recipient when designing our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF7F2] border border-black shadow-[4px_6px_0px_rgba(0,0,0,1)] px-6 py-8 text-center flex flex-col items-center"
              >
                <div className="mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-medium">{item.content}</p>
              </div>
            ))}
          </div>
        </FadeInWrapper>
      </section>

      <section className="w-full bg-[#FDF6F6] px-4 py-24">
        <div className="max-w-4xl mx-auto border border-black bg-white shadow-[6px_6px_0_0_#000] p-8 text-center">
          <FadeInWrapper>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The Sensoplay Difference
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              We are a community led initiative designing innovative experiences
              for neurodivergent individuals with complex needs.
            </p>
          </FadeInWrapper>
        </div>
      </section>

      <section className=" bg-[#FCF2E9]">
        <div className="container mx-auto px-4 py-24">
          <FadeInWrapper>
            <div className="flex justify-between items-center">
              {/* Image Section */}
              <div className="hidden md:block">
                <Image
                  src="/images/contactUs/contactUs.png"
                  alt="Contact Us"
                  width={500}
                  height={500}
                />
              </div>

              {/* Form Section */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-lg font-bold text-[#F39184] mb-2">
                    Contact Us
                  </h2>
                  <p className="text-2xl text-slate-950 font-semibold mb-8">
                    Join Our Mission To Develop
                    <br />
                    Amazing Toys For Non-Verbal Individuals.
                  </p>
                </div>

                <form className="space-y-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 border-b border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="First Name"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 border-b border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border-b border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border-b border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="flex w-full justify-end">
                    <button
                      type="submit"
                      className="bg-[#F39184] hover:bg-[#f8b7ae] cursor-pointer text-white font-medium py-2 px-4 shadow-[6px_6px_0_0_#000]"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </FadeInWrapper>
        </div>
      </section>
    </div>
  );
}
