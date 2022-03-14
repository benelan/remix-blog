import TopNav from "./TopNav";

type LayoutProps = {
  children: JSX.Element;
  theme: string;
};

const Layout = ({ children, theme }: LayoutProps) => (
  <div id="wrapper" className={`wrapper flex flex-col ${theme} text-type`}>
    <TopNav theme={theme} />
    <main className="pt-16 px-8 flex-grow flex flex-col justify-center lg:px-16 bg-background">
      {children}
    </main>
  </div>
);

export default Layout;
