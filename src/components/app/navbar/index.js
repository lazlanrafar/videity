/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Logo } from "../../../assets";

const listLinks = [
  {
    title: "Movies",
    to: "/movies",
  },
  {
    title: "Shows",
    to: "/shows",
  },
  {
    title: "Pricing",
    to: "/pricing",
  },
];

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div className="fixed w-full z-50">
      <Popover
        className={
          scroll
            ? "relative bg-transparent bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"
            : "relative bg-transparent"
        }
      >
        <div className="container px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Videity</span>
                <img className="w-16 sm:w-20" src={Logo} alt="" />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              {listLinks.map((link, index) => (
                <a
                  href="#"
                  key={index}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  {link.title}
                </a>
              ))}
              <div>
                <a
                  href="#"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </a>
              </div>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="w-16" src={Logo} alt="Workflow" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {listLinks.map((link, index) => (
                      <a
                        href=""
                        key={index}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {link.title}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
