export default function Header() {
  return (
    <header className="w-full pt-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-evenly  gap-4">

        {/* Navigation */}
        <div className="rounded-3xl bg-gray-600 
          flex flex-wrap justify-center gap-3 
          px-6 py-3">
          {["Why me", "About", "Projects", "Experience", "Glimpse"].map(
            (item) => (
              <h1
                key={item}
                className="text-sm md:text-base cursor-pointer whitespace-nowrap"
              >
                {item}
              </h1>
            )
          )}
        </div>

        {/* CTA Button */}
        <button
          className="inline-flex items-center justify-center h-10 px-6 rounded-full
          bg-linear-to-br from-[#8A66FC] to-[#5A34DF]
          text-white text-sm md:text-base
          shadow-lg"
        >
          Let&apos;s Connect
        </button>

      </div>
    </header>
  );
}
