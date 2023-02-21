export default function Wrapper({ children }) {
  return (
    <section className="bg-back">
      <main className="text-main  relative max-w-[1252px] w-full mx-auto">
        {children}
      </main>
    </section>
  );
}
