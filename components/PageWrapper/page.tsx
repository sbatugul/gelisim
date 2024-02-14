import NavBar from "../Navbar/page";

export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      <div className="min-h-dvh">{children}</div>
    </main>
  );
}
