import React from 'react';

const WorkExperience: React.FC = () => {
  const jobs = [
    { title: 'Developer at MetaCartel', period: '2021 - Present' },
    { title: 'Frontend Developer at ZkSync', period: '2019 - 2021' },
    { title: 'Junior Developer at MicroSoft', period: '2018 - 2019' },
    { title: 'Hairstylist', period: '2014 - 2018' },
  ];

  return (
    <section>
      <h2>Work Experience</h2>
      {jobs.map((job, index) => (
        <div key={index} style={{margin: '10px', padding: '10px', border: '1px solid #ddd'}}>
          <h3>{job.title}</h3>
          <p>{job.period}</p>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;