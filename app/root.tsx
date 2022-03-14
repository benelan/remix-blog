// eslint-disable-next-line no-use-before-define
import * as React from "react";
import {
  ActionFunction,
  createCookie,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  MetaFunction,
  Outlet,
  redirect,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useCatch
} from "remix";
import type { LinksFunction } from "remix";
import Layout from "./components/Layout";
import global from "./styles/global.css";
import tailwindUrl from "./styles/tailwind.css";
import { getCookieValue } from "./utils/cookie";
const theme = createCookie("theme");

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: global },
  { rel: "stylesheet", href: tailwindUrl },
];

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = await getCookieValue(request, theme);
  if (!cookie.theme) cookie.theme = "dark";
  return { theme: cookie.theme };
};

export const action: ActionFunction = async ({ request }) => {
  const cookie = await getCookieValue(request, theme);
  const formData = await request.formData();
  cookie.theme = formData.get("theme") || cookie.theme || "dark";
  const returnUrl = formData.get("returnUrl") || "/";
  const serializedCookie = await theme.serialize(cookie);
  return redirect(returnUrl.toString(), {
    headers: {
      "Set-Cookie": serializedCookie,
    },
  });
};

export const meta: MetaFunction = () => ({
  "twitter:card": "summary",
});

/**
 * The root module's default export is a component that renders the current
 * route via the `<Outlet />` component. Think of this as the global layout
 * component for your app.
 */
export default function App() {
  const cookie = useLoaderData();
  return (
    // eslint-disable-next-line no-use-before-define
    <Document title="Ben Elan">
      <Layout theme={cookie.theme}>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {/* eslint-disable-next-line no-use-before-define */}
        <RouteChangeAnnouncement />
        <ScrollRestoration />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout theme="dark">
        <>
          <h1>
            {caught.status}: {caught.statusText}
          </h1>
        </>
      </Layout>
    </Document>
  )
}

export function ErrorBoundary({error}: {error: Error}) {
  console.error(error)
  return (
    <Document title="Error!">
      <Layout theme="dark">
        <div>
          <h1>Error:</h1>
          <p>{error.message}</p>
        </div>
      </Layout>
    </Document>
  )
}



/**
 * Provides an alert for screen reader users when the route changes.
 */
// eslint-disable-next-line react/display-name
const RouteChangeAnnouncement = React.memo(() => {
  const [hydrated, setHydrated] = React.useState(false);
  const [innerHtml, setInnerHtml] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  const firstRenderRef = React.useRef(true);
  React.useEffect(() => {
    // Skip the first render because we don't want an announcement on the
    // initial page load.
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    const pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);

  // Render nothing on the server. The live region provides no value unless
  // scripts are loaded and the browser takes over normal routing.
  if (!hydrated) {
    return null;
  }

  return (
    <div
      aria-live="assertive"
      aria-atomic
      id="route-change-region"
      style={{
        border: "0",
        clipPath: "inset(100%)",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap",
        wordWrap: "normal",
      }}
    >
      {innerHtml}
    </div>
  );
});
