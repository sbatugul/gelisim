import NavBar from "../Navbar/page";

export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      <div className="min-h-dvh px-4 lg:px-64 mt-16 ">{children}</div>
    </main>
  );
}
