const SiteFooter = () => (
  <footer className="border-t border-white/10 bg-black/80">
    <div className="flex w-full flex-col gap-y-4 px-6 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:px-10">
      <p>&copy; {new Date().getFullYear()} Zoriography. Tutti i diritti riservati.</p>
      <p className="text-white/40">
        Fotografia come narrazione visiva. Milano - Disponibile per progetti internazionali.
      </p>
    </div>
  </footer>
);

export default SiteFooter;
