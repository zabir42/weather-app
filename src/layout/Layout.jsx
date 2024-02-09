
export default function Layout({ children }) {
  return (
    <div className="bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid place-items-center">
      {children}
    </div>
  );
}
