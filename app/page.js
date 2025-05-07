import Image from "next/image";
import { FaCog, FaUserAlt, FaShieldAlt, FaRegSmile } from "react-icons/fa";

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

export default function Home() {
  return (
    <div>
      <section className="container mx-auto">
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-white">
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
        </div>
      </section>

      <section className="container mx-auto ">
        <main className="py-24 px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            WHAT WE OFFER?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10">
            Dive into our collection of innovative sensory toys that provide
            real-time feedback and challenges through augmented reality. Each
            product is designed to engage and support autistic children,
            parents, and carers in a fun and meaningful way.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {offerings.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col group justify-between bg-[#FCF2E9] min-h-72 border-slate-950 border-2 border-solid  drop-shadow-xl/50 px-6 py-8 text-left hover:shadow-lg transition-shadow duration-200"
              >
                <div>
                  <Image
                    className="mb-4"
                    src={item.icon}
                    height={20}
                    width={20}
                    alt="icons"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 transform transition-transform duration-300 group-hover:-translate-y-3">
                    {item.title}
                  </h3>
                </div>
                <div className="bg-white rounded px-2 py-4 text-sm font-medium text-gray-800 inline-block">
                  <p className="font-semibold">{item.subtitle}</p>
                  <p className="opacity-0 max-h-0 overflow-hidden transition-all duration-1300 group-hover:opacity-100 group-hover:max-h-40 group-hover:mt-4">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}
