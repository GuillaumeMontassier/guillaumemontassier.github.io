import React from "react";
import { GitHub, Linkedin } from "react-feather";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
          Guillaume Montassier
        </a>
        <nav className=" md:ml-auto md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            A propos
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Compétences
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projets
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Contact
          </a>
          <a
            href="https://github.com/GuillaumeMontassier"
            target="_blank"
            className="mr-5 hover:text-purple-500"
          >
            <GitHub strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/guillaume-montassier-6284a5152/"
            target="_blank"
            className="mr-5 hover:text-linkedin"
          >
            <Linkedin strokeWidth={1.5} />
          </a>
        </nav>
      </div>
    </header>
  );
}
