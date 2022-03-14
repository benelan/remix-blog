import { Link, NavLink, useLocation } from "@remix-run/react";

type TopNavProps = {
  theme: string;
};

const TopNav = ({ theme }: TopNavProps) => {
  const location = useLocation();
  const navItems = () => {
    const routeStyle =
      "relative before:absolute before:bottom-[-5px] before:h-[5px] before:w-[0] before:mt-[5px] before:bg-primary before:transition-all before:duration-300";
    return (
      <>
        <li className="w-6 h-6">
          <a
            className={routeStyle}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
            href="https://www.linkedin.com/in/benelan"
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1792 2048"
            >
              <path
                transform="scale(4 4) translate(0 0)"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
            </svg>
          </a>
        </li>
        <li className="w-6 h-6">
          <a
            className={routeStyle}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
            href="https://github.com/benelan"
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1984 2048"
            >
              <path
                transform="scale(4 4) translate(0 0)"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
        </li>
      </>
    );
  };

  const LogoLetter = ({ letter }: { letter: string }) => (
    <span className="letter inline-block top-0 relative">{letter}</span>
  );

  return (
    <>
      <nav className="fixed bg-secondary h-16 w-full z-50">
        <div className="flex h-full container mx-auto justify-between items-center px-4 lg:px-16">
          <Link className="logo flex flex-row text-lg lg:text-2xl" to="/">
            <LogoLetter letter="b" />
            <LogoLetter letter="e" />
            <LogoLetter letter="n" />
            <span>&nbsp;</span>
            <LogoLetter letter="e" />
            <LogoLetter letter="l" />
            <LogoLetter letter="a" />
            <LogoLetter letter="n" />
          </Link>
          <button
            aria-label="Toggle mobile menu"
            type="button"
            id="MobileNavToggle"
            className="md:hidden order-3 cursor-pointer relative w-5 h-6"
          >
            <span className="absolute transform transition-transform duration-300 h-1 w-full bg-type rounded-lg left-0 top-1 rotate-0" />
            <span className="absolute h-1 w-full bg-type rounded-lg left-0 top-3" />
            <span className="absolute transform transition-transform duration-300 h-1 w-full bg-type rounded-lg left-0" />
          </button>
          <form method="post" action="/">
            <input
              name="theme"
              type="hidden"
              value={theme === "light" ? "dark" : "light"}
            />
            <input name="returnUrl" type="hidden" value={location.pathname} />
            <button
              aria-label="Toggle Dark Mode"
              type="submit"
              id="darkModeToggle"
              className="p-3 top-1 lg:top-auto overflow-hidden order-2 md:order-3 absolute left-2/4 transform -translate-x-2/4 md:translate-x-0 lg:transform-none md:relative md:left-0"
            >
              <div className="relative h-8 w-8">
                <span className="absolute inset-0 dark:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 hidden dark:inline-block">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </span>
              </div>
            </button>
          </form>
          <ul className="hidden md:flex md:gap-6">{navItems()}</ul>
          <ul
            className="md:hidden absolute flex flex-col w-full top-16 left-0 py-4 items-center text-type bg-secondary transform gap-4"
            id="MobileNav"
          >
            {navItems()}
          </ul>
        </div>
      </nav>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        document.getElementById('MobileNavToggle').addEventListener('click', function() {
          this.classList.toggle('open')
          const MobileNav = document.getElementById('MobileNav')
          MobileNav.classList.add('transition-transform')
          MobileNav.classList.toggle('open')
        })
      `,
        }}
      />
    </>
  );
};

export default TopNav;
