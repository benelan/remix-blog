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
        <li>
          <NavLink to="/" className={routeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={routeStyle}>
            Blog
          </NavLink>
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
            <span className="absolute transform transition-transform duration-300 h-1 w-full bg-text rounded-lg left-0 top-1 rotate-0" />
            <span className="absolute h-1 w-full bg-text rounded-lg left-0 top-3" />
            <span className="absolute transform transition-transform duration-300 h-1 w-full bg-text rounded-lg left-0" />
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
            className="md:hidden absolute flex flex-col w-full top-16 left-0 py-4 items-center text-white bg-secondary transform gap-4"
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
