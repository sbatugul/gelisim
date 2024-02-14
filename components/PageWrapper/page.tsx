import NavBar from "../Navbar/page";
import Footer from "../Footer/page";

export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      <div className="min-h-dvh">{children}</div>
      <Footer />
    </main>
  );
}
