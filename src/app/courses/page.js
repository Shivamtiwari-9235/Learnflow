import Link from 'next/link';
import { courses } from '../../data/courses';

export default function CoursesPage() {
  return (
    <div className="page-shell section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The catalogue</p>
          <h1>Choose your next skill</h1>
        </div>
        <p className="section-description">Learn at your own pace with practical, beginner-friendly lessons.</p>
      </div>
      <div className="course-grid">
        {courses.map((course) => (
          <article className="course-card" key={course.id}>
            <div className="course-meta"><span>{course.level}</span><span>{course.duration}</span></div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p className="lesson-total">{course.lessons.length} lessons</p>
            <Link href={`/courses/${course.id}`} className="text-link">View course →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}