interface SideBySideSectionsProps {
  children: React.ReactElement[];
}

const SideBySideSections: React.FC<SideBySideSectionsProps> = ({
  children,
}) => {
  return <section className="sideBySideSectionContainer">{children}</section>;
};

export default SideBySideSections;
