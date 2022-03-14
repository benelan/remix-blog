import TopNav from "./TopNav";
import Socials from "./Socials";

type LayoutProps = {
  children: JSX.Element;
  theme: string;
};

const Layout = ({ children, theme }: LayoutProps) => (
  <div id="wrapper" className={`wrapper flex flex-col ${theme}`}>
    <TopNav theme={theme} />
    <main className="pt-16 px-8 flex-grow flex flex-col justify-center lg:px-16 bg-background">
      {children}
    </main>
    <div className="bg-background">
    <Socials />
    </div>
  </div>
);

export default Layout;
