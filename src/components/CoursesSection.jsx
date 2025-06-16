import React from 'react';
import './CoursesSection.css';

const courses = [
  { title: "React JS", image: "/assets/react.png" },
  { title: "JavaScript Avançado", image: "/assets/js.png" },
  { title: "HTML & CSS", image: "/assets/htmlcss.png" },
  { title: "UI/UX Design", image: "/assets/uiux.png" },
  { title: "Git & GitHub", image: "/assets/git.png" },
  { title: "Node.js", image: "/assets/node.png" },
  { title: "Firebase", image: "/assets/firebase.png" },
  { title: "Figma", image: "/assets/figma.png" },
];

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <h2 className="section-title">Meus Cursos</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
