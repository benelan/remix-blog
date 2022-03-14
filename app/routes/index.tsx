import { MetaFunction } from "remix";
import type { LinksFunction } from "remix";

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "/img/ben.png",
    as: "image",
  },
];

export const meta: MetaFunction = () => ({
  title: "Ben Elan | Home",
  description: "Ben Elan's personal website",
  "twitter:title": "Ben Elan | Home",
  "twitter:description": "Ben Elan's personal website",
  "og:title": "Ben Elan | Home",
  "og:description": "Ben Elan's personal website",
});

export default function Index() {
  return (
    <>
      <section
        id="hero"
        className="relative lg:pt-0 items-center content-center flex text-text"
      >
        <div className="container gap-8 md:gap-0 grid md:grid-cols-2 items-center content-center justify-items-center">
          <div className="w-3/5 md:p-5">
            <img alt="Profile" src="/img/ben.png" width={500} height={500} />
          </div>
          <div>
            <h1 className="text-2xl font-bold md:text-4xl text-center md:text-left">
              <div>Web developer specializing in</div>
              <span className="animate-skill-1">UI/UX</span>{" "}·{" "}
              <span className="animate-skill-2">spatial data</span>{" "}·{" "}
              <span className="animate-skill-3">automation</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
