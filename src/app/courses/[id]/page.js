import { courses } from '../../../data/courses';
import Link from 'next/link';
import LessonChecklist from '../../../components/LessonChecklist';

export function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetails({ params }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <div className="page-shell section"><h1>Course not found</h1><Link className="text-link" href="/courses">Back to courses →</Link></div>;
  }

  return (
    <div className="page-shell section course-detail">
      <Link className="back-link" href="/courses">← Back to courses</Link>
      <div className="detail-header">
        <p className="eyebrow">{course.level} · {course.duration}</p>
        <h1>{course.title}</h1>
        <p className="detail-description">{course.description}</p>
      </div>
      <div className="detail-content">
        <div>
          <h2>Course lessons</h2>
          <p className="muted">Check off each lesson as you complete it. Your progress is kept while this page is open.</p>
        </div>
        <LessonChecklist lessons={course.lessons} />
      </div>
    </div>
  );
}