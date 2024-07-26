interface MainProps {
  children: React.ReactElement[];
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <main id="section-container">{children}</main>;
};

export default Main;
