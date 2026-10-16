import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <Link href="/" className="brand">
          LearnFlow
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/#feedback">Feedback</Link>
        </div>
      </div>
    </nav>
  );
}