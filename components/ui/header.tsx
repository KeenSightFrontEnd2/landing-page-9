import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

export default function Header() {
  const navLinks = [
    {
      route: "Home",
      path: "/",
    },
    {
      route: "About Us",
      path: "/",
    },
    {
      route: "ChatGPT",
      path: "/",
    },
    {
      route: "Consulting Services",
      path: "/",
    },
  ];

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Keensight Logo">
              <Image
                src="/images/keensight-logo.svg"
                width={200}
                height={100}
                alt="Keensight Logo"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {navLinks.map((link) => {
                return (
                  <li key={link.route}>
                    <Link
                      href={link.path}
                      className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      {link.route}
                    </Link>
                  </li>
                );
              })}

              <li>
                <Link
                  href="/signup"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                >
                  Request an AI Consultation
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
