export default function Wrapper({ children, style }) {
  return (
    <section className={`${style}`}>
      <main className="text-main  relative max-w-[1252px] w-full mx-auto">
        {children}
      </main>
    </section>
  );
}
