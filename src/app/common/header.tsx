const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Why Me", href: "#why-me" },
  { label: "Glimpse", href: "#glimpse" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Header() {
  const email = "anushreemehta6@gmail.com";
  return (
    <header className="w-full pt-10  z-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-4 px-4">

        {/* Navigation */}
        <nav className="rounded-3xl bg-[#282828]/90 backdrop-blur-md
          flex flex-wrap justify-center gap-2 sm:gap-4
          px-4 sm:px-8 py-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap
                text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={`mailto:${email}`}
          className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full
            bg-linear-to-br from-[#8A66FC] to-[#5A34DF]
            text-white text-sm md:text-base
            shadow-lg hover:opacity-90 transition-opacity"
        >
          Let&apos;s Connect
        </a>

      </div>
    </header>
  );
}
