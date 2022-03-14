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
        className="relative lg:pt-0 items-center content-center flex"
      >
        <div className="container gap-8 md:gap-0 grid md:grid-cols-2 items-center content-center justify-items-center">
          <div className="w-3/5 pt-5">
            <img alt="Profile" src="/img/ben.png" width={500} height={500} />
          </div>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center :text-left">
              <div>Web developer</div>
              <div>specializing in</div>
              <div className="animate-skill-1">UI/UX</div>
              <div className="animate-skill-2">spatial data</div>
              <div className="animate-skill-3">automation</div>
            </h1>
          </div>
      </section>
    </>
  );
}
