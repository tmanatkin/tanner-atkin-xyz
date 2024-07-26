const skills = [
  'Node.js',
  'JavaScript',
  'HTML',
  'CSS',
  'Python',
  'SQL',
  'ASP.NET',
  'C#',
  'Postgres',
  'AWS',
  'GitHub',
];

const Skills = () => {
  return (
    <section className="skill-section primary-bg-section">
      <h2>Here's some skills that I've learned</h2>
      <div>
        {skills.map((skill) => (
          <h3>{skill}</h3>
        ))}
      </div>
    </section>
  );
};

export default Skills;
