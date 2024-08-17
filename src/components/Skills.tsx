const skills = [
  'Node.js',
  'JavaScript',
  'React',
  'Python',
  'SQL',
  'C#',
  'HTML',
  'CSS',
  'ASP.NET',
  'MySQL',
  'Postgres',
  'AWS',
  'GitHub',
  'ChatGPT',
  'C++',
  'Unity',
];

// Node.js, JavaScript, Python, SQL, C#, HTML, CSS, ASP.NET, MySQL, Postgres, AWS, GitHub, ChatGPT
// React, jQuery, C++, Unity Game Development, 3D Modeling, and Graphic Design

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
