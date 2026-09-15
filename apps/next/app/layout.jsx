import "../style.css";
export const metadata = {
  title: "Next.js | Framework lab",
  description:
    "Learn React state in a statically exported Next.js application.",
};
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
