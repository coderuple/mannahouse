export default function ArtistsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
      {/* <footer className="mt-10 py-6 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Artist Pages · Manna House
      </footer> */}
    </section>
  )
}
