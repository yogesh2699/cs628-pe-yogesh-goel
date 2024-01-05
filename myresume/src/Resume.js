import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="student-name">Student Name</h1>
      <p>123 Main Street, Anytown USA, 12345 | (123) 456-7890 | studentname@email.com</p>

      <section>
        <h2 className="section-heading">Education</h2>
        <p>Master of Science in Computer Science</p>
        <p>University of XYZ, Anytown USA | May 2023</p>
        <p>GPA: 3.9/4.0</p>
        <p>Bachelor of Science in Computer Science</p>
        <p>University of ABC, Anytown USA | May 2021</p>
        <p>GPA: 3.7/4.0</p>
      </section>

      <section>
        <h2 className="section-heading">Skills</h2>
        <p>Programming languages: Java, Python, JavaScript, C++</p>
        <p>Frameworks and libraries: React, Spring Boot, Django, Node.js, Express.js</p>
        <p>Database systems: MySQL, MongoDB</p>
        <p>Operating systems: Windows, Linux</p>
        <p>Version control: Git</p>
      </section>

      <section>
        <h2 className="section-heading">Work Experience</h2>
        <p>Software Development Intern</p>
        <p>XYZ Corporation, Anytown USA | May 2022 - August 2022</p>
        <ul>
          <li>Worked on a team to develop a new web application using React and Node.js</li>
          <li>Collaborated with team members to design and implement features</li>
          <li>Debugged and fixed issues in the codebase</li>
        </ul>
      </section>

      <section>
        <h2 className="section-heading">Teaching Assistant</h2>
        <p>Department of Computer Science, University of XYZ | August 2021 - Present</p>
        <ul>
          <li>Assist with grading and holding office hours for an undergraduate computer science course</li>
          <li>Help students with assignments and answer questions about course material</li>
        </ul>
      </section>

      <section>
        <h2 className="section-heading">Projects</h2>
        <p>Personal Website</p>
        <p>Built a personal website using React and deployed it on GitHub Pages</p>
        <p>Source code: <a href="http://github.com/studentnarre/personal-website">http://github.com/studentnarre/personal-website</a></p>
      </section>

      <section>
        <h2 className="section-heading">Online Bookstore</h2>
        <p>Developed a web application for an online bookstore using Spring Boot and MySQL</p>
        <p>Source code: <a href="https://github.com/studentname/online-bookstore">https://github.com/studentname/online-bookstore</a></p>
      </section>
    </div>
  );
};

export default Resume;