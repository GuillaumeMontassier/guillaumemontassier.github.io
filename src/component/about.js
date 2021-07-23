import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container h-screen max-w-7xl mx-auto flex px-5 pb-10 md:py-20 flex-row items-center">
        <div className="md:flex-grow flex flex-col self-auto mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font md:text-6xl text-4xl mb-4 font-medium text-main_white">
            Hi, I'm Guillaume Montassier
          </h1>
          <p className="mb-8 leading-relaxed md:text-xl">
            I'm a french engineering student and I'm interested in artificial
            intelligence, machine learning and web development. I'm currently
            looking for an end-of-study internship in one of these areas. Scroll
            dowmn if you want to learn more about me.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded md:text-lg"
            >
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded md:text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./assets/hello.svg"
          />
        </div> */}
      </div>
    </section>
  );
}
