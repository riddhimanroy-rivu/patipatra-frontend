import { useState } from "react";

const ceremonyImage =
  "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1800&q=88";

const collections = [
  {
    id: 1,
    title: "Kalka",
    bengali: "কলকা",
    category: "Ritual craft",
    description: "Ornamental Bengali motifs, hand-painted for your celebration.",
    image:
      "https://images.unsplash.com/photo-1771769076330-c424547f5c1c?auto=format&fit=crop&w=900&q=85",
    size: "large",
  },
  {
    id: 2,
    title: "Gachkouto",
    bengali: "গাছকৌটো",
    category: "Ritual craft",
    description: "Traditional ceremonial craft, finished with delicate detailing.",
    image:
      "https://images.unsplash.com/photo-1680491026542-a99730a0e235?auto=format&fit=crop&w=900&q=85",
    size: "small",
  },
  {
    id: 3,
    title: "Paan Pata",
    bengali: "পান পাতা",
    category: "Ritual craft",
    description: "Decorated betel leaves composed for auspicious wedding rituals.",
    image:
      "https://images.unsplash.com/photo-1705475388142-a2700c4caeb5?auto=format&fit=crop&w=900&q=85",
    size: "small",
  },
  {
    id: 4,
    title: "Boron & Khai Daan",
    bengali: "বরণ ও খই দান",
    category: "Wedding essentials",
    description: "A thoughtfully decorated set for welcoming and sacred offerings.",
    image:
      "https://images.unsplash.com/photo-1670576980747-5dbb2623dc96?auto=format&fit=crop&w=900&q=85",
    size: "large",
  },
  {
    id: 5,
    title: "Decorated Kulo",
    bengali: "কুলো",
    category: "Wedding essentials",
    description: "Hand-painted and adorned winnowing trays for every ritual moment.",
    image:
      "https://images.unsplash.com/photo-1645257236324-9f431c6f3120?auto=format&fit=crop&w=900&q=85",
    size: "small",
  },
  {
    id: 6,
    title: "Biyer Piri",
    bengali: "বিয়ের পিঁড়ি",
    category: "Wedding essentials",
    description: "Wedding stools illustrated by hand with your chosen story and palette.",
    image:
      "https://images.unsplash.com/photo-1729237261107-6fc4279f6d1c?auto=format&fit=crop&w=900&q=85",
    size: "small",
  },
  {
    id: 7,
    title: "Matir Thala",
    bengali: "মাটির থালা",
    category: "Wedding essentials",
    description: "Earthy clay plates elevated with painted Bengali folk ornament.",
    image:
      "https://images.unsplash.com/photo-1699764681875-dd04ce36b1c3?auto=format&fit=crop&w=900&q=85",
    size: "small",
  },
  {
    id: 8,
    title: "Mehendi Art",
    bengali: "মেহেদি",
    category: "Art & keepsakes",
    description: "Personal mehendi artistry shaped around your wedding story.",
    image:
      "https://images.unsplash.com/photo-1734112679709-d0798e79f37f?auto=format&fit=crop&w=900&q=85",
    size: "large",
  },
  {
    id: 9,
    title: "Resin Memories",
    bengali: "স্মৃতি সংরক্ষণ",
    category: "Art & keepsakes",
    description: "Your most precious wedding flowers and mementos, preserved in resin.",
    image:
      "https://images.unsplash.com/photo-1607512566084-a20ed291d623?auto=format&fit=crop&w=900&q=85",
    size: "small",
  },
  {
    id: 10,
    title: "Artistic Panjabi",
    bengali: "হাতে আঁকা পাঞ্জাবি",
    category: "Wearable art",
    description: "Hand-painted shirts and Panjabis made as one-of-one wearable pieces.",
    image:
      "https://images.unsplash.com/photo-1647949940712-bfcf82015d9b?auto=format&fit=crop&w=900&q=85",
    size: "small",
  },
  {
    id: 11,
    title: "Your Imagination",
    bengali: "আপনার পছন্দমতো",
    category: "Custom orders",
    description: "Have something else in mind? Share your idea and we will create it.",
    image:
      "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=900&q=85",
    size: "large",
  },
];

const filters = [
  "All",
  "Ritual craft",
  "Wedding essentials",
  "Art & keepsakes",
  "Wearable art",
  "Custom orders",
];

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: "arrow" | "heart" | "menu" | "close" | "spark";
  className?: string;
}) {
  const paths = {
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5a5.5 5.5 0 0 0 1-8.9Z" />
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    spark: <path d="m12 3 1.2 4.2L17 9l-3.8 1.8L12 15l-1.2-4.2L7 9l3.8-1.8L12 3Zm6 11 .7 2.3L21 17l-2.3.7L18 20l-.7-2.3L15 17l2.3-.7L18 14Z" />,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [saved, setSaved] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState(false);

  const visibleCollections =
    activeFilter === "All"
      ? collections
      : collections.filter((item) => item.category === activeFilter);

  const toggleSaved = (id: number) => {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const requestConsultation = () => {
    setToast(true);
    window.setTimeout(() => setToast(false), 3200);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--ivory)] text-[var(--ink)]">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/20 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 text-left"
            aria-label="Home"
          >
            <span className="h-12 w-12 overflow-hidden rounded-full border border-white/55 bg-[var(--red)]">
              <img
                src="/assets/patipatra-logo.png"
                alt=""
                className="h-full w-full scale-[1.36] object-cover"
              />
            </span>
            <span>
              <span className="font-bengali block text-2xl leading-none tracking-wide">
                পাটিপত্র
              </span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.28em] text-white/70">
                Handmade with heritage
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-9 text-sm lg:flex" aria-label="Main navigation">
            <a className="nav-link" href="#collections">Collections</a>
            <a className="nav-link" href="#craft">Our craft</a>
            <a className="nav-link" href="#story">About</a>
          </nav>

          <button
            type="button"
            onClick={requestConsultation}
            className="hidden rounded-full border border-white/60 px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition hover:bg-white hover:text-[var(--red)] lg:block"
          >
            Plan with us
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-white/50 p-2.5 lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/20 bg-[var(--red)] px-6 py-6 lg:hidden">
            <div className="flex flex-col gap-5 font-serif text-2xl">
              <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
              <a href="#craft" onClick={() => setMenuOpen(false)}>Our craft</a>
              <a href="#story" onClick={() => setMenuOpen(false)}>About</a>
            </div>
          </nav>
        )}
      </header>

      <section className="relative flex min-h-[820px] items-end md:min-h-screen">
        <img
          src={ceremonyImage}
          alt="A couple beneath a richly decorated Indian wedding canopy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 text-white md:pb-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[var(--marigold)]">
              <span className="h-px w-9 bg-current" />
              Rooted in Bengal
            </div>
            <h1 className="font-serif text-6xl leading-[0.88] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[7.6rem]">
              Rituals, made
              <span className="block italic text-[var(--marigold)]">remarkable.</span>
            </h1>
            <div className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-sm leading-7 text-white/80 md:text-base">
              Immersive Bengali wedding décor and heirloom craft, shaped by
                local hands and thoughtfully made for your story.
              </p>
              <a
                href="#collections"
                className="group flex w-fit items-center gap-4 rounded-full bg-[var(--marigold)] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink)] transition hover:bg-white"
              >
                Explore our worlds
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-6 right-5 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/60 md:flex lg:right-10">
            <span>Scroll to discover</span>
            <span className="h-px w-12 bg-white/50" />
          </div>
        </div>
      </section>

      <section id="story" className="relative mx-auto max-w-7xl px-5 py-24 md:py-32 lg:px-10">
        <div className="decorative-flower absolute -right-20 top-6 text-[var(--red)]/10" aria-hidden="true">✦</div>
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="eyebrow">Our point of view</p>
            <p className="mt-6 max-w-xs text-sm leading-7 text-[var(--muted)]">
              The soul of a Bengali celebration lives in its details — a
              hand-drawn line, a flower threaded at dawn, a story passed on.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-5xl md:text-6xl">
              Not just a setting.
              <span className="block italic text-[var(--red)]">A living piece of culture.</span>
            </h2>
            <div className="mt-10 grid gap-8 border-t border-[var(--line)] pt-8 sm:grid-cols-3">
              {[
                ["01", "Rooted", "Bengal’s rituals, symbols and seasons."],
                ["02", "Handmade", "Created with regional artisan partners."],
                ["03", "Personal", "Every celebration begins with your story."],
              ].map(([number, title, copy]) => (
                <div key={number}>
                  <span className="font-serif text-sm italic text-[var(--red)]">{number}</span>
                  <h3 className="mt-4 font-serif text-2xl">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-[var(--muted)]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="bg-[var(--paper)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">What we create</p>
              <h2 className="mt-4 font-serif text-5xl tracking-[-0.03em] md:text-6xl">
                Made for your <span className="italic text-[var(--red)]">moments</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter collections">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-xs transition ${
                    activeFilter === filter
                      ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                      : "border-[var(--line)] hover:border-[var(--ink)]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleCollections.map((collection) => (
              <article
                key={collection.id}
                className={`collection-card group relative overflow-hidden ${
                  collection.size === "large" ? "md:row-span-2" : ""
                }`}
              >
                <img
                  src={collection.image}
                  alt={collection.description}
                  className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
                    collection.size === "large" ? "min-h-[520px]" : "min-h-[330px]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />
                <button
                  type="button"
                  onClick={() => toggleSaved(collection.id)}
                  className={`absolute right-4 top-4 rounded-full border border-white/50 p-2.5 backdrop-blur-md transition ${
                    saved.includes(collection.id)
                      ? "bg-[var(--red)] text-white"
                      : "bg-black/10 text-white hover:bg-white hover:text-[var(--red)]"
                  }`}
                  aria-label={`${saved.includes(collection.id) ? "Remove" : "Save"} ${collection.title}`}
                >
                  <Icon name="heart" className={`h-4 w-4 ${saved.includes(collection.id) ? "fill-current" : ""}`} />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="mb-2 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[var(--marigold)]">
                    <span>{collection.category}</span>
                    <span className="h-px w-6 bg-current" />
                    <span className="font-bengali text-sm tracking-normal">{collection.bengali}</span>
                  </div>
                  <h3 className="font-serif text-3xl">{collection.title}</h3>
                  <p className="mt-2 max-w-sm text-xs leading-5 text-white/70">{collection.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="craft" className="bg-[var(--green)] text-white">
        <div className="grid min-h-[680px] lg:grid-cols-2">
          <div className="relative min-h-[500px] overflow-hidden lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1645257236324-9f431c6f3120?auto=format&fit=crop&w=1200&q=88"
              alt="A basket overflowing with orange marigold flowers"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[var(--red)]/15 mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 rounded-full bg-[var(--ivory)] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[var(--ink)]">
              Freshly gathered • Kolkata
            </div>
          </div>
          <div className="flex items-center px-6 py-20 md:px-16 lg:px-20">
            <div className="max-w-xl">
              <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[var(--marigold)]">
                <Icon name="spark" className="h-4 w-4" />
                Made by many hands
              </p>
              <h2 className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.03em] md:text-7xl">
                Craft that carries
                <span className="block italic text-[var(--marigold)]">a memory.</span>
              </h2>
              <p className="mt-8 max-w-md text-sm leading-7 text-white/65">
                From hand-painted kalka and wedding piri to clay plates,
                keepsakes and one-of-one Panjabis, every piece is made with
                patience. Bring us an idea, and we will find a way to make it yours.
              </p>
              <button
                type="button"
                onClick={requestConsultation}
                className="group mt-10 flex items-center gap-4 border-b border-[var(--marigold)] pb-2 text-xs uppercase tracking-[0.2em] text-[var(--marigold)]"
              >
                Request something special
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[var(--red)] px-5 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="font-bengali text-xl text-[var(--marigold)]">আপনার গল্প, আমাদের সাজ</p>
          <h2 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.03em] md:text-7xl">
            Let’s create something
            <span className="block italic">unmistakably yours.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white/70">
            Tell us where, when, and what feels like home. We’ll return with a
            celebration imagined around you.
          </p>
          <button
            type="button"
            onClick={requestConsultation}
            className="mt-9 rounded-full bg-[var(--marigold)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink)] transition hover:bg-white"
          >
            Begin your story
          </button>
        </div>
      </section>

      <footer className="bg-[var(--ink)] px-5 py-10 text-white/60 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-xs sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3 text-white">
            <span className="h-10 w-10 overflow-hidden rounded-full border border-white/30 bg-[var(--red)]">
              <img
                src="/assets/patipatra-logo.png"
                alt=""
                className="h-full w-full scale-[1.36] object-cover"
              />
            </span>
            <span className="font-bengali text-2xl">পাটিপত্র</span>
          </div>
          <p>Wedding craft • Preserved memories • Wearable art</p>
          <p>© 2025 পাটিপত্র</p>
        </div>
      </footer>

      <div
        className={`fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[var(--ink)] px-5 py-3 text-xs text-white shadow-2xl transition-all duration-300 ${
          toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        role="status"
      >
        Thank you — we’ll help you begin your story.
      </div>
    </main>
  );
}
