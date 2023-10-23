import Image from "next/image";
import React from "react";
import next from "../../../public/nextjs.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="text-gray-400 ">
      <div className="bg-white">
        <div className="text-center py-2">Made With</div>
        <Link href={"https://nextjs.org/"}>
          <Image
            width={100}
            className="bg-white mx-auto"
            alt="next image"
            src={next}
          />
        </Link>

        <h5 className="text-xs text-center">
          <Link href="https://github.com/Thrinkxs/" target="_blank">
            Designed & Developed by Thrinkxs
          </Link>
        </h5>
        <p className="text-center text-xs">© 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
