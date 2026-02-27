import techfluxLogo from "../../assets/97803067c0aec46e43b07e2df6709083ebfe41e9.png";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-[#030A1C]">
      <div className="max-w-[1260px] mx-auto px-4 lg:px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={techfluxLogo} alt="TechFlux Logo" className="w-5 h-5" />
            <span className="text-[12px] font-semibold text-[#F9FAFB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              TechFlux Solutions
            </span>
          </div>
          <p className="text-[#8195BD] text-[11px]">
            © 2026 TechFlux Solutions. Building the future of digital products.
          </p>
        </div>
      </div>
    </footer>
  );
}
