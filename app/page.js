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
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
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

      <section className="container mx-auto ">
        <main className="py-24 px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
            We consider the needs of both the carer and the non-verbal recipient
            when designing our products.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl justify-items-center">
            {cards.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between w-[320px] border-slate-950 border-2 border-solid text-left bg-white shadow-[6px_6px_0px_#888888]"
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
        </main>
      </section>

      <section className="container mx-auto ">
        <main className="py-24 px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
            We consider the needs of both the carer and the non-verbal recipient
            when designing our products.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl justify-items-center">
            {approach.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between w-[320px] py-8 bg-white "
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
        </main>
      </section>
    </div>
  );
}
