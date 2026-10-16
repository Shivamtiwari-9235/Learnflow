"use client";

import { useState } from "react";

export default function LessonChecklist({ lessons }) {
  const [completedLessons, setCompletedLessons] = useState([]);

  function toggleLesson(lessonId) {
    setCompletedLessons((current) =>
      current.includes(lessonId)
        ? current.filter((id) => id !== lessonId)
        : [...current, lessonId]
    );
  }

  if (lessons.length === 0) {
    return <p className="empty-state">Lessons will be added soon.</p>;
  }

  const completedCount = completedLessons.length;
  const progress = Math.round((completedCount / lessons.length) * 100);

  return (
    <div className="lesson-panel">
      <div className="progress-header">
        <div>
          <p className="eyebrow">Your progress</p>
          <p className="progress-count">
            {completedCount} of {lessons.length} lessons complete
          </p>
        </div>
        <span className="progress-percent">{progress}%</span>
      </div>
      <div className="progress-track" aria-label={`${progress}% complete`}>
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <ul className="lesson-list">
        {lessons.map((lesson) => {
          const isComplete = completedLessons.includes(lesson.id);
          return (
            <li key={lesson.id}>
              <label className={`lesson-item ${isComplete ? "is-complete" : ""}`}>
                <input
                  type="checkbox"
                  checked={isComplete}
                  onChange={() => toggleLesson(lesson.id)}
                />
                <span>{lesson.title}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
