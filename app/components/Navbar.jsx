"use client";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navigation = {
  items: [
    {
      path: "/about",
      label: "About",
      id: 1,
    },
  ],
};

export default function Navbar() {
  const { scrollY } = useScroll();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
      setNavbarOpen(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      initial={false}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}
      className="sticky top-0 shadow-lg z-50 bg-white  "
    >
      <div className="flex md:justify-between justify-around container mx-auto py-10">
        <Link
          href={"/"}
          className="text-2xl my-auto text-slate-900 font-extrabold "
        >
          <h1 className="uppercase">Sensoplay</h1>
        </Link>

        <span
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden cursor-pointer self-center"
        >
          {!navbarOpen ? (
            <RxHamburgerMenu className="text-4xl" />
          ) : (
            <IoCloseSharp className="text-4xl" />
          )}
        </span>

        <ul
          className={classNames(
            `absolute left-0 bg-white w-full flex flex-col items-center
            gap-8 py-8 border-b-4 border-gray-200 border-solid md:static 
            md:flex-row md:justify-end md:flex-wrap md:max-w-[32rem] md:border-0 md:p-0.5
          `,
            `${navbarOpen ? "top-[116px]" : "top-[-390px]"}`
          )}
        >
          {navigation.items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={classNames("btn-primary", {
                  "btn-primary border-blue-600 border-2 border-solid":
                    pathname === item.path,
                })}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
