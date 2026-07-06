import { createFileRoute } from "@tanstack/react-router";
import { Search, ShoppingCart, Star, ArrowUpRight, Play, ArrowRight, Plus } from "lucide-react";
import logo from "@/assets/logo.svg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const AVATAR = "https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128";
const PRODUCT = "https://polo-pecan-73837341.figma.site/_assets/v11/3e5158dad63d392ade022e81890edc9f54d750bc.png";
const VIDEO = "https://polo-pecan-73837341.figma.site/_assets/v11/76be6ec3a93a703b15e9cc01e764a4e3f9d7d2c0.png";
const BOTTOM_L = "https://polo-pecan-73837341.figma.site/_assets/v11/8d44b25186ef45a5789c74668fb781cea4e1ff49.png";
const BOTTOM_C = "https://polo-pecan-73837341.figma.site/_assets/v11/96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024";
const BOTTOM_R = "https://polo-pecan-73837341.figma.site/_assets/v11/81bd2e7a66b58f3d8f3ad78fd1ebf01af8dfdee1.png";

function IconBtn({
  children,
  className = "",
  badge,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  badge?: string;
  ariaLabel: string;
}) {
  return (
    <button
      aria-label={ariaLabel}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors ${className}`}
    >
      {children}
      {badge && (
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-orange text-white text-[10px] font-bold flex items-center justify-center border-2 border-brand-bg">
          {badge}
        </span>
      )}
    </button>
  );
}

function Header() {
  return (
    <header className="shrink-0 relative z-30 w-full px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between animate-fade-in delay-100">
      <a href="/" className="flex items-center shrink-0" aria-label="Patron Barney Home">
        <img
          src={logo.url}
          alt="Patron Barney Grooming"
          className="h-[33px] w-[130px] lg:h-[52px] lg:w-[205px] object-contain"
        />
      </a>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#" className="text-gray-900 hover:text-brand-green">Home</a>
        <a href="#" className="text-gray-600 hover:text-brand-green">Shop</a>
        <a href="#" className="text-gray-600 hover:text-brand-green">Delivery and payment</a>
        <a href="#" className="text-gray-600 hover:text-brand-green">Brands</a>
        <a href="#" className="text-gray-600 hover:text-brand-green">Blog</a>
      </nav>

      <div className="flex items-center gap-2 md:gap-3">
        <IconBtn ariaLabel="Search" className="hidden sm:flex border border-gray-300 text-gray-700 hover:bg-white">
          <Search className="w-4 h-4" />
        </IconBtn>
        <IconBtn ariaLabel="Favorites" badge="4" className="bg-brand-orange text-white hover:bg-brand-orange-hover">
          <Star className="w-4 h-4 fill-white" />
        </IconBtn>
        <IconBtn ariaLabel="Cart" badge="1" className="border border-gray-300 text-gray-700 hover:bg-white">
          <ShoppingCart className="w-4 h-4" />
        </IconBtn>
        <img
          src={AVATAR}
          alt="Account"
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
      </div>
    </header>
  );
}

function ProductCard() {
  return (
    <div
      className="animate-slide-in-left delay-600"
      style={{ width: "clamp(160px, 14vw, 260px)" }}
    >
      <div
        className="relative rounded-2xl overflow-hidden bg-white"
        style={{ aspectRatio: "260 / 257" }}
      >
        <img src={PRODUCT} alt="Cozy Cat House" className="w-full h-full object-cover" />
        <button
          aria-label="View product"
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center hover:bg-brand-green-hover transition-colors"
        >
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-3">
        <div className="text-gray-700" style={{ fontSize: "clamp(12px, 0.9vw, 14px)" }}>
          Cozy Cat House
        </div>
        <div className="text-brand-green font-semibold" style={{ fontSize: "clamp(14px, 1.1vw, 18px)" }}>
          $49.99
        </div>
      </div>
    </div>
  );
}

function VideoCard() {
  return (
    <div
      className="animate-slide-in-right delay-700"
      style={{ width: "clamp(120px, 10vw, 177px)" }}
    >
      <div
        className="relative rounded-2xl overflow-hidden bg-white"
        style={{ aspectRatio: "177 / 287" }}
      >
        <img src={VIDEO} alt="Product reviews" className="w-full h-full object-cover" />
        <button
          aria-label="Play video"
          className="absolute left-1/2 -translate-x-1/2 bottom-4 w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center hover:bg-brand-green-hover transition-colors"
        >
          <Play className="w-4 h-4 fill-white" />
        </button>
      </div>
      <div
        className="mt-3 text-gray-700 leading-tight"
        style={{ fontSize: "clamp(11px, 0.8vw, 13px)" }}
      >
        Watch Product Reviews on TikTok and YouTube
      </div>
    </div>
  );
}

function HeroHeading() {
  const line1 = ["Everything"];
  const line2 = ["Your", "Pets", "Love"];
  let i = 0;
  const delayFor = () => {
    const d = 200 + i * 100;
    i++;
    return d;
  };
  return (
    <h1
      className="font-serif-display text-center tracking-tight text-brand-green"
      style={{ fontSize: "clamp(60px, 7.5vw, 110px)", lineHeight: 0.95 }}
    >
      <span className="block">
        {line1.map((w) => (
          <span
            key={w}
            className="inline-block animate-word-pop"
            style={{ animationDelay: `${delayFor()}ms` }}
          >
            {w}
          </span>
        ))}
      </span>
      <span className="block">
        {line2.map((w, idx) => (
          <span
            key={w}
            className="inline-block animate-word-pop"
            style={{ animationDelay: `${delayFor()}ms`, marginLeft: idx === 0 ? 0 : "0.25em" }}
          >
            {w}
          </span>
        ))}
      </span>
    </h1>
  );
}

function AvatarStack() {
  return (
    <div className="flex items-center -space-x-2">
      <img src={AVATAR} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
      <img src={AVATAR} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
      <div className="w-8 h-8 rounded-full bg-brand-green border-2 border-white flex items-center justify-center text-white">
        <Plus className="w-4 h-4" />
      </div>
    </div>
  );
}

function DesktopHero() {
  return (
    <section className="hidden lg:flex flex-1 flex-col overflow-hidden relative">
      {/* Text layer */}
      <div className="relative z-[5] px-12 pt-[5.4rem]">
        <HeroHeading />
      </div>

      {/* Left product card */}
      <div className="absolute z-20" style={{ top: 50, left: 48 }}>
        <ProductCard />
      </div>

      {/* Right video card */}
      <div className="absolute z-20" style={{ top: 50, right: 48 }}>
        <VideoCard />
      </div>

      {/* Bottom 3 images */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end">
        <div className="flex-1 relative animate-photo-reveal delay-700">
          <img
            src={BOTTOM_L}
            alt=""
            className="w-full h-auto block"
            style={{ maxHeight: "min(70vh, 55vw)", objectFit: "cover" }}
          />
          <div
            className="absolute left-6 flex items-center gap-3 animate-fade-up delay-1000"
            style={{ bottom: "clamp(20px, 4vh, 50px)" }}
          >
            <AvatarStack />
            <div>
              <div className="text-white font-serif-display text-3xl leading-none drop-shadow">98K+</div>
              <div className="text-white/90 text-xs mt-1">Happy pet parents</div>
            </div>
          </div>
        </div>

        <div className="flex-[1.265] relative animate-photo-reveal delay-600">
          <img
            src={BOTTOM_C}
            alt=""
            className="w-full h-auto block"
            style={{ maxHeight: "min(85vh, 70vw)", objectFit: "cover" }}
          />
          <div
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-center animate-fade-up delay-1100 w-full px-6"
            style={{ bottom: "clamp(20px, 4vh, 50px)" }}
          >
            <h2 className="font-serif-display text-white text-3xl md:text-4xl leading-tight drop-shadow-lg max-w-md">
              Best Products for Your Pet
            </h2>
            <button className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium px-6 py-3 rounded-full transition-colors">
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 relative animate-photo-reveal delay-900">
          <img
            src={BOTTOM_R}
            alt=""
            className="w-full h-auto block"
            style={{ maxHeight: "min(70vh, 55vw)", objectFit: "cover" }}
          />
          <div
            className="absolute right-6 flex items-center gap-2 animate-fade-up delay-1200"
            style={{ bottom: "clamp(20px, 4vh, 50px)" }}
          >
            <Star className="w-6 h-6 text-brand-orange fill-brand-orange" />
            <div>
              <div className="text-white font-serif-display text-3xl leading-none drop-shadow">4.6</div>
              <div className="text-white/90 text-xs mt-1">Average rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TabletHero() {
  return (
    <section className="hidden md:flex lg:hidden flex-1 flex-col overflow-hidden relative">
      <div className="relative z-[5] px-8 pt-16">
        <HeroHeading />
      </div>

      <div className="absolute z-20" style={{ top: 80, left: 16 }}>
        <div style={{ width: 160 }}>
          <ProductCard />
        </div>
      </div>
      <div className="absolute z-20" style={{ top: 80, right: 16 }}>
        <div style={{ width: 120 }}>
          <VideoCard />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end">
        <div className="flex-1 relative animate-photo-reveal delay-700">
          <img src={BOTTOM_L} alt="" className="w-full h-auto block" style={{ maxHeight: "60vh", objectFit: "cover" }} />
        </div>
        <div className="flex-[1.265] relative animate-photo-reveal delay-600">
          <img src={BOTTOM_C} alt="" className="w-full h-auto block" style={{ maxHeight: "75vh", objectFit: "cover" }} />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-3 text-center w-full px-4">
            <h2 className="font-serif-display text-white text-2xl drop-shadow-lg">Best Products for Your Pet</h2>
            <button className="inline-flex items-center gap-2 bg-brand-orange text-white text-sm font-medium px-4 py-2 rounded-full">
              Explore Products <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex-1 relative animate-photo-reveal delay-900">
          <img src={BOTTOM_R} alt="" className="w-full h-auto block" style={{ maxHeight: "60vh", objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}

function MobileHero() {
  return (
    <section className="flex md:hidden flex-1 flex-col overflow-hidden">
      <div className="px-4 pt-4 text-center animate-fade-up delay-200">
        <h1 className="font-serif-display text-brand-green" style={{ fontSize: 36, lineHeight: 1 }}>
          Everything Your Pets Love
        </h1>
        <p className="text-gray-600 text-sm mt-3">
          Cozy homes, top products, and grooming your pets adore.
        </p>
        <button className="mt-4 inline-flex items-center gap-2 bg-brand-orange text-white text-sm font-medium px-5 py-2.5 rounded-full">
          Explore Products <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex gap-3 px-4 mt-4">
        <div className="flex-1 relative rounded-2xl overflow-hidden aspect-square bg-white">
          <img src={PRODUCT} alt="Cozy Cat House" className="w-full h-full object-cover" />
          <button aria-label="View" className="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-brand-green text-white flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1 relative rounded-2xl overflow-hidden bg-white" style={{ aspectRatio: "3/4" }}>
          <img src={VIDEO} alt="Reviews" className="w-full h-full object-cover" />
          <button aria-label="Play" className="absolute left-1/2 -translate-x-1/2 bottom-3 w-9 h-9 rounded-full bg-brand-green text-white flex items-center justify-center">
            <Play className="w-4 h-4 fill-white" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-around px-4 mt-4">
        <div className="flex items-center gap-2">
          <AvatarStack />
          <div>
            <div className="font-serif-display text-brand-green text-xl leading-none">98K+</div>
            <div className="text-gray-600 text-[10px]">Happy pets</div>
          </div>
        </div>
        <div className="w-px h-8 bg-gray-300" />
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
          <div>
            <div className="font-serif-display text-brand-green text-xl leading-none">4.6</div>
            <div className="text-gray-600 text-[10px]">Rating</div>
          </div>
        </div>
      </div>

      <div className="mt-auto flex items-end">
        <img src={BOTTOM_L} alt="" className="flex-1 w-full h-auto block object-cover" />
        <img src={BOTTOM_C} alt="" className="flex-[1.265] w-full h-auto block object-cover" />
        <img src={BOTTOM_R} alt="" className="flex-1 w-full h-auto block object-cover" />
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="h-screen flex flex-col overflow-hidden bg-brand-bg">
      <Header />
      <DesktopHero />
      <TabletHero />
      <MobileHero />
    </main>
  );
}
