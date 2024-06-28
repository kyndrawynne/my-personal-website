import React from 'react';

const Projects: React.FC = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'].map((project, index) => (
          <div key={index} style={{margin: '10px', padding: '10px', border: '1px solid #ddd'}}>
            <h3>{project}</h3>
            <p>Description for {project} goes here.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;