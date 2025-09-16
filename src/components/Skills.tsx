const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "SQL",
  "Python",
  "C#",
  "Git",
  "Docker",
  "AWS",
  "Azure"
];

const Skills = () => {
  return (
    <section className="skill-section primary-bg-section">
      <h2>These are a few skills I've learned.</h2>
      <div>
        {skills.map((skill, index) => (
          <h3 className="gradient-background" key={index}>
            {skill}
          </h3>
        ))}
      </div>
    </section>
  );
};

export default Skills;
