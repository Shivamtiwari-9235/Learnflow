import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "LearnFlow | Learn by doing",
  description: "A beginner-friendly course learning platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="site-footer">LearnFlow · Learn a little every day.</footer>
      </body>
    </html>
  );
}