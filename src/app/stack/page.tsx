import { FaAngular, FaReact } from "react-icons/fa";
import react from "../../../public/react.svg";
import angular from "../../../public/file-type-angular.svg";
import framer from "../../../public/framer.svg";
import nextjs from "../../../public/nextjs.svg";
import python from "../../../public/python.svg";
import javascript from "../../../public/javascript-js.svg";
import typescript from "../../../public/typescript-icon.svg";
import tailwind from "../../../public/tailwind-css.svg";
import django from "../../../public/file-type-django.svg";
import flask from "../../../public/flask.svg";
import c from "../../../public/c-original.svg";
import csharp from "../../../public/c-sharp.svg";
import reactnative from "../../../public/sdk-react-native.svg";
import linux from "../../../public/linux-svgrepo-com.svg";
import bash from "../../../public/bash.svg";
import vercel from "../../../public/vercel.svg";
import git from "../../../public/git.svg";
import node from "../../../public/file-type-node.svg";
import notion from "../../../public/notion.svg";
import figma from "../../../public/figma.svg";
import vscode from "../../../public/file-type-vscode.svg";
import pycharm from "../../../public/pycharm.svg";
import github from "../../../public/github.svg";
import bootstrap from "../../../public/bootstrap.svg";
import html from "../../../public/file-type-html.svg";
import css from "../../../public/file-type-css.svg";
import svelte from "../../../public/svelte-icon.svg";
import vite from "../../../public/vite-svgrepo-com.svg";
import emacs from "../../../public/emacs.svg";
import chatgpt from "../../../public/chatgpt-icon.svg";
import webflow from "../../../public/webflow.svg";
import wordpress from "../../../public/wordpress.svg";
import Image from "next/image";

const page = () => {
  return (
    <div className="text-white sm:mx-3 mx-20  ">
      <h1 className="text-xl  sm:pl-0 pl-4 py-4 md:text-center my-10 font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        Frameworks and Languages{" "}
      </h1>
      <p className="md:text-center md:-mt-10 md:pb-5 text-gray-400">
        Tools I use in my development
      </p>
      {/* className="sm:grid sm:grid-cols-3 sm:gap-5 sm:px-8 sm:py-4 sm:mx-4" */}
      <div className="flex md:flex-col justify-center items-center gap-5 flex-wrap my-5 ">
        <div className="bg-card p-20 rounded-xl md:h-72 h-72 ">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={react} width={100} />
          <p className="text-center my-10 border p-2 rounded ">React</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={angular} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Angular</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={nextjs} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Next Js</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={python} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Python</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={typescript} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Typescript</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={javascript} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Javascript</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={tailwind} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Tailwind</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={c} width={100} />
          <p className="text-center my-10 border p-2 rounded ">C</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={csharp} width={100} />
          <p className="text-center my-10 border p-2 rounded ">C#</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={django} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Django</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={flask} width={100} />
          <p className="text-center my-8 border p-2 rounded ">Flask</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={reactnative} width={100} />
          <p className="text-center my-10 border p-2 rounded ">React Native</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={html} width={100} />
          <p className="text-center my-10 border p-2 rounded ">HTML</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={css} width={100} />
          <p className="text-center my-10 border p-2 rounded ">CSS</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={bootstrap} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Bootstrap</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={svelte} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Svelte</p>
        </div>
      </div>

      <h1 className="text-xl sm:pl-0 pl-4 py-4 md:text-center my-10 font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        Apps
      </h1>
      <p className="md:text-center md:-mt-10 pb-5 text-gray-400">
        Software I use for productivity and building stuff
      </p>
      <div className="flex md:flex-col justify-center items-center gap-5 flex-wrap my-5">
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={figma} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Figma</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={vscode} width={100} />
          <p className="text-center my-10 border p-2 rounded ">VS Code</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={linux} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Linux</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={pycharm} width={100} />
          <p className="text-center my-10 border p-2 rounded ">PyCharm</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={emacs} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Emacs</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={framer} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Framer</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={vite} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Vite</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={github} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Github</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={git} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Git</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={chatgpt} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Chat Gpt</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={webflow} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Webflow</p>
        </div>
        <div className="bg-card p-20 rounded-xl md:h-72 h-72">
          {/* <FaAngular />
          <FaReact /> */}

          <Image src={wordpress} width={100} />
          <p className="text-center my-10 border p-2 rounded ">Wordpress</p>
        </div>
      </div>
    </div>
  );
};

export default page;
