import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ExternalLink, GitHub, Linkedin } from "react-feather";

const navigation = [
  { name: "About me", href: "#", current: true },
  { name: "Studies", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Contact me", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-2 flex items-center justify-center sm:items-stretch">
                {/* Title section */}
                <div className="flex-shrink-0 flex items-center text-xl antialiased font-semibold">
                  Guillaume Montassier
                </div>
              </div>
              {/* Tab section */}
              <div className=" flex-end inset-y-0 right-0 flex items-start pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden md:block items-center">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-white"
                          : "text-gray-500 hover:bg-gray-800 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium inline-block"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="https://github.com/GuillaumeMontassier"
                    target="_blank"
                    className="px-3 py-2 text-gray-500 hover:bg-gray-800 hover:text-purple-500 rounded-md inline-block align-middle"
                  >
                    <GitHub strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/guillaume-montassier-6284a5152/"
                    target="_blank"
                    className="px-3 py-2 text-gray-500 hover:bg-gray-800 hover:text-linkedin rounded-md inline-block align-middle"
                  >
                    <Linkedin strokeWidth={1.5} />
                  </a>
                </div>
                {/* Mobile menu button*/}
                <Disclosure.Button className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          {/* Mobile poped-up menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-justify"
                href="https://github.com/GuillaumeMontassier"
              >
                <div className="flex">
                  <p className="flex-1">GitHub</p>
                  <ExternalLink strokeWidth={1.5} className="flex-2" />
                </div>
              </a>
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-justify"
                target="_blank"
                href="https://www.linkedin.com/in/guillaume-montassier-6284a5152/"
              >
                <div className="flex">
                  <p className="flex-1">LinkedIn</p>
                  <ExternalLink strokeWidth={1.5} className="flex-2" />
                </div>
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
