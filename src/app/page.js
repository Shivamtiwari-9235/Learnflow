import Link from "next/link";
import FeedbackForm from "../components/FeedbackForm";
import { courses } from "../data/courses";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="page-shell hero-content">
          <p className="eyebrow">A clearer path to better code</p>
          <h1>Learn practical skills, one small win at a time.</h1>
          <p className="hero-copy">Short, focused courses that help you build confidence through practice, not passive watching.</p>
          <Link className="button button-primary" href="/courses">Explore courses <span aria-hidden="true">→</span></Link>
        </div>
      </section>
      <section className="page-shell section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Start learning</p>
            <h2>Build your foundation</h2>
          </div>
          <Link className="text-link" href="/courses">View all courses →</Link>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.id}>
              <span className="course-number">0{course.id}</span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link className="text-link" href={`/courses/${course.id}`}>Open course →</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="page-shell feedback-section" id="feedback">
        <div className="feedback-intro">
          <p className="eyebrow">Keep us improving</p>
          <h2>Tell us about your learning experience.</h2>
          <p>Your feedback helps shape clearer lessons for everyone.</p>
        </div>
        <FeedbackForm />
      </section>
    </>
  );
}