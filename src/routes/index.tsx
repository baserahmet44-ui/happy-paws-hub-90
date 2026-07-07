import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Star,
  ArrowUpRight,
  Play,
  ArrowRight,
  Plus,
  Scissors,
  Home,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Trophy,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Menu,
  X as XIcon,
  ChevronLeft,
  ChevronRight,
  PawPrint,
  Instagram,
  Facebook,
} from "lucide-react";
import logo from "@/assets/logo.svg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pet Kuaförü — Şanlıurfa'nın İlk Pet Oteli, Kuaförü ve Shop'u" },
      {
        name: "description",
        content:
          "Şanlıurfa'nın ilk ve tek pet oteli, pet kuaförü ve pet shop mağazası. Ferda Hanım ile sevgi dolu, güvenilir hizmet.",
      },
      { property: "og:title", content: "Pet Kuaförü — Şanlıurfa" },
      {
        property: "og:description",
        content:
          "Evcil dostlarınıza sevgiyle bakıyoruz. Pet kuaför, pet otel ve pet shop hizmetleri.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const AVATAR =
  "https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128";
const PRODUCT =
  "https://polo-pecan-73837341.figma.site/_assets/v11/3e5158dad63d392ade022e81890edc9f54d750bc.png";
const VIDEO =
  "https://polo-pecan-73837341.figma.site/_assets/v11/76be6ec3a93a703b15e9cc01e764a4e3f9d7d2c0.png";
const BOTTOM_L =
  "https://polo-pecan-73837341.figma.site/_assets/v11/8d44b25186ef45a5789c74668fb781cea4e1ff49.png";
const BOTTOM_C =
  "https://polo-pecan-73837341.figma.site/_assets/v11/96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024";
const BOTTOM_R =
  "https://polo-pecan-73837341.figma.site/_assets/v11/81bd2e7a66b58f3d8f3ad78fd1ebf01af8dfdee1.png";

const WHATSAPP_URL = "https://wa.me/905334031704";
const TEL_URL = "tel:+905334031704";
const PHONE_DISPLAY = "0533 403 17 04";
const ADDRESS =
  "Veysel Karani Mahallesi, Abdullah Balak Caddesi No:3/A, Haliliye / Şanlıurfa";
const MAP_QUERY = encodeURIComponent(ADDRESS);
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

// Hero subtitle — split into parts so the accent word can be swapped per client.
const HERO_SUBTITLE = {
  pre: "Şanlıurfa'nın ",
  accent: "ilk ve tek",
  post: " pet oteli, kuaförü ve pet shop mağazası.",
};

function HeroSubtitle({
  className = "",
  sizeClass = "text-xl md:text-2xl lg:text-3xl",
}: {
  className?: string;
  sizeClass?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
      className={`${sizeClass} leading-snug text-center max-w-3xl mx-auto ${className}`}
      style={{ color: "#14532d" }}
    >
      {HERO_SUBTITLE.pre}
      <span
        className="font-serif-display italic font-bold"
        style={{ color: "#ea6a1e" }}
      >
        {HERO_SUBTITLE.accent}
      </span>
      {HERO_SUBTITLE.post}
    </motion.p>
  );
}



/* ---------------- Header ---------------- */

const NAV_LINKS = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#iletisim", label: "İletişim" },
];

function IconBtn({
  children,
  className = "",
  badge,
  ariaLabel,
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  badge?: string;
  ariaLabel: string;
  href?: string;
  onClick?: () => void;
}) {
  const cn = `relative w-11 h-11 rounded-full flex items-center justify-center transition-colors ${className}`;
  const content = (
    <>
      {children}
      {badge && (
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-orange text-white text-[10px] font-bold flex items-center justify-center border-2 border-brand-bg">
          {badge}
        </span>
      )}
    </>
  );
  if (href)
    return (
      <a href={href} aria-label={ariaLabel} className={cn}>
        {content}
      </a>
    );
  return (
    <button aria-label={ariaLabel} onClick={onClick} className={cn}>
      {content}
    </button>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/90 backdrop-blur border-b border-brand-green/10"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-8 lg:px-12 py-3 md:py-4 flex items-center justify-between animate-fade-in delay-100">
        <a
          href="#anasayfa"
          className="flex items-center shrink-0"
          aria-label="Pet Kuaförü"
        >
          <img
            src={logo.url}
            alt="Pet Kuaförü"
            className="h-[33px] w-[130px] lg:h-[52px] lg:w-[205px] object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-brand-green transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <IconBtn
            ariaLabel="Ara"
            href={TEL_URL}
            className="border border-brand-green/20 text-brand-green hover:bg-white"
          >
            <Phone className="w-4 h-4" />
          </IconBtn>
          <button
            aria-label="Menü"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-11 h-11 rounded-full border border-brand-green/20 text-brand-green flex items-center justify-center"
          >
            {open ? <XIcon className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-green/10 bg-brand-bg animate-fade-in">
          <nav className="flex flex-col p-4 gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-800 py-2 border-b border-brand-green/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-green text-white font-medium px-4 py-3 rounded-full"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp'tan Yaz
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero cards ---------------- */

function ServiceHighlightCard() {
  return (
    <div
      className="animate-slide-in-left delay-600"
      style={{ width: "clamp(160px, 14vw, 260px)" }}
    >
      <div
        className="relative rounded-2xl overflow-hidden bg-white"
        style={{ aspectRatio: "260 / 257" }}
      >
        <img
          src={PRODUCT}
          alt="Pet Kuaför"
          className="w-full h-full object-cover"
        />
        <button
          aria-label="Hizmetleri gör"
          onClick={() =>
            document.getElementById("hizmetler")?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center hover:bg-brand-green-hover transition-colors"
        >
          <ArrowUpRight className="w-5 h-5" />
        </button>
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-[10px] font-medium text-brand-green">
          <Scissors className="w-3 h-3" /> Kuaför
        </div>
      </div>
      <div className="mt-3">
        <div
          className="text-gray-700"
          style={{ fontSize: "clamp(12px, 0.9vw, 14px)" }}
        >
          Pet Kuaför
        </div>
        <div
          className="text-brand-green font-semibold"
          style={{ fontSize: "clamp(13px, 1vw, 16px)" }}
        >
          Profesyonel Bakım
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
        <img src={VIDEO} alt="Bakım videoları" className="w-full h-full object-cover" />
        <button
          aria-label="Videoyu oynat"
          className="absolute left-1/2 -translate-x-1/2 bottom-4 w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center hover:bg-brand-green-hover transition-colors"
        >
          <Play className="w-4 h-4 fill-white" />
        </button>
      </div>
      <div
        className="mt-3 text-gray-700 leading-tight"
        style={{ fontSize: "clamp(11px, 0.8vw, 13px)" }}
      >
        Bakım anlarımızı sosyal medyada takip edin
      </div>
    </div>
  );
}

function HeroHeading() {
  const words = ["Evcil", "Dostlarınıza", "Sevgiyle", "Bakıyoruz"];
  return (
    <h1
      className="font-serif-display text-center tracking-tight text-brand-green"
      style={{ fontSize: "clamp(44px, 6.2vw, 96px)", lineHeight: 0.98 }}
    >
      <span className="block">
        {words.slice(0, 2).map((w, i) => (
          <span
            key={w}
            className="inline-block animate-word-pop"
            style={{ animationDelay: `${200 + i * 100}ms`, marginRight: "0.25em" }}
          >
            {w}
          </span>
        ))}
      </span>
      <span className="block">
        {words.slice(2).map((w, i) => (
          <span
            key={w}
            className="inline-block animate-word-pop"
            style={{ animationDelay: `${400 + i * 100}ms`, marginRight: "0.25em" }}
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
      <img
        src={AVATAR}
        alt=""
        className="w-8 h-8 rounded-full border-2 border-white object-cover"
      />
      <div className="w-8 h-8 rounded-full bg-brand-orange border-2 border-white flex items-center justify-center text-white">
        <PawPrint className="w-4 h-4" />
      </div>
      <div className="w-8 h-8 rounded-full bg-brand-green border-2 border-white flex items-center justify-center text-white">
        <Plus className="w-4 h-4" />
      </div>
    </div>
  );
}

/* ---------------- Hero (desktop / tablet / mobile) ---------------- */

function DesktopHero() {
  return (
    <section className="hidden lg:flex h-[calc(100vh-84px)] min-h-[640px] flex-col overflow-hidden relative">
      <div className="relative z-30 px-12 pt-10 pointer-events-none">
        <HeroHeading />
        <div className="mt-6 px-4">
          <HeroSubtitle sizeClass="text-2xl lg:text-3xl xl:text-4xl" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end">
        <div className="flex-1 relative animate-photo-reveal delay-700">
          <img
            src={BOTTOM_L}
            alt=""
            className="w-full h-auto block"
            style={{ maxHeight: "min(60vh, 50vw)", objectFit: "cover" }}
          />
          <div
            className="absolute left-6 flex items-center gap-3 animate-fade-up delay-1000"
            style={{ bottom: "clamp(20px, 4vh, 50px)" }}
          >
            <AvatarStack />
            <div>
              <div className="text-white font-serif-display text-2xl leading-none drop-shadow">
                Sevgiyle
              </div>
              <div className="text-white/90 text-xs mt-1">Urfa'nın İlki</div>
            </div>
          </div>
        </div>

        <div className="flex-[1.265] relative animate-photo-reveal delay-600">
          <img
            src={BOTTOM_C}
            alt=""
            className="w-full h-auto block"
            style={{ maxHeight: "min(75vh, 65vw)", objectFit: "cover" }}
          />
          <div
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-center animate-fade-up delay-1100 w-full px-6"
            style={{ bottom: "clamp(20px, 4vh, 50px)" }}
          >
            <h2 className="font-serif-display text-white text-2xl md:text-3xl leading-tight drop-shadow-lg max-w-md">
              Dostunuz bizim de dostumuz
            </h2>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              Randevu Al <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex-1 relative animate-photo-reveal delay-900">
          <img
            src={BOTTOM_R}
            alt=""
            className="w-full h-auto block"
            style={{ maxHeight: "min(60vh, 50vw)", objectFit: "cover" }}
          />
          <div
            className="absolute right-6 flex items-center gap-2 animate-fade-up delay-1200"
            style={{ bottom: "clamp(20px, 4vh, 50px)" }}
          >
            <Star className="w-6 h-6 text-brand-orange fill-brand-orange" />
            <div>
              <div className="text-white font-serif-display text-3xl leading-none drop-shadow">
                5.0
              </div>
              <div className="text-white/90 text-xs mt-1">
                Google Puanı · 13 değerlendirme
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TabletHero() {
  return (
    <section className="hidden md:flex lg:hidden h-[calc(100vh-72px)] min-h-[600px] flex-col overflow-hidden relative">
      <div className="relative z-[5] px-8 pt-6">
        <HeroHeading />
        <div className="mt-4 px-2">
          <HeroSubtitle sizeClass="text-lg md:text-xl" />
        </div>
      </div>


      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end">
        <div className="flex-1 relative">
          <img src={BOTTOM_L} alt="" className="w-full h-auto block" style={{ maxHeight: "55vh", objectFit: "cover" }} />
        </div>
        <div className="flex-[1.265] relative">
          <img src={BOTTOM_C} alt="" className="w-full h-auto block" style={{ maxHeight: "68vh", objectFit: "cover" }} />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-3 text-center w-full px-4">
            <h2 className="font-serif-display text-white text-2xl drop-shadow-lg">
              Dostunuz bizim de dostumuz
            </h2>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-brand-orange text-white text-sm font-medium px-4 py-2 rounded-full"
            >
              Randevu Al <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="flex-1 relative">
          <img src={BOTTOM_R} alt="" className="w-full h-auto block" style={{ maxHeight: "55vh", objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}

function MobileHero() {
  return (
    <section className="flex md:hidden flex-col overflow-hidden">
      <div className="px-4 pt-4 text-center animate-fade-up delay-200">
        <h1 className="font-serif-display text-brand-green" style={{ fontSize: "clamp(30px, 9vw, 40px)", lineHeight: 1.05 }}>
          Evcil Dostlarınıza Sevgiyle Bakıyoruz
        </h1>
        <div className="mt-4">
          <HeroSubtitle sizeClass="text-base" />
        </div>
      </div>

      <div className="mt-5 flex items-end animate-fade-up delay-400">
        <img src={BOTTOM_L} alt="" className="flex-1 min-w-0 w-full h-auto block" />
        <img src={BOTTOM_C} alt="" className="flex-[1.265] min-w-0 w-full h-auto block" />
        <img src={BOTTOM_R} alt="" className="flex-1 min-w-0 w-full h-auto block" />
      </div>

      <div className="flex items-center justify-around px-4 mt-5 animate-fade-up delay-600">
        <div className="flex items-center gap-2">
          <AvatarStack />
          <div>
            <div className="font-serif-display text-brand-green text-lg leading-none">Sevgiyle</div>
            <div className="text-gray-600 text-[10px]">Urfa'nın İlki</div>
          </div>
        </div>
        <div className="w-px h-8 bg-gray-300" />
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
          <div>
            <div className="font-serif-display text-brand-green text-lg leading-none">5.0</div>
            <div className="text-gray-600 text-[10px]">Google · 13</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 mt-6 pb-4 animate-fade-up delay-700">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium px-6 py-3 rounded-full transition-colors"
        >
          Randevu Al <ArrowRight className="w-4 h-4" />
        </a>
      </div>


    </section>
  );
}

/* ---------------- Scroll reveal wrapper ---------------- */

function Reveal({
  children,
  className = "",
  delay = 0,
  animation = "animate-fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: string;
}) {
  const [visible, setVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(ref);
    return () => io.disconnect();
  }, [ref]);
  return (
    <div
      ref={setRef}
      className={`${visible ? animation : "opacity-0"} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- Sections ---------------- */

function TrustBar() {
  const items = [
    { icon: Star, text: "5.0 ⭐ Google Puanı" },
    { icon: Trophy, text: "Urfa'nın İlk ve Teki" },
    { icon: HeartHandshake, text: "Sevgiyle Hizmet" },
  ];
  return (
    <section className="bg-brand-green text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm md:text-base font-medium">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-2">
            <it.icon className="w-4 h-4 text-brand-orange fill-brand-orange" />
            <span>{it.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="hakkimizda" className="py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      <PawPrint className="absolute -top-6 -left-6 w-40 h-40 text-brand-green/5" />
      <PawPrint className="absolute bottom-10 right-4 w-24 h-24 text-brand-orange/10 rotate-12" />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center relative">
        <Reveal animation="animate-slide-in-left">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-white shadow-lg">
            <img src={BOTTOM_C} alt="Ferda Hanım ve dostları" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal animation="animate-fade-up" delay={100}>
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-xs font-medium">
            <PawPrint className="w-3 h-3" /> Hakkımızda
          </div>
          <h2 className="font-serif-display text-brand-green mt-4 leading-tight" style={{ fontSize: "clamp(32px, 4vw, 54px)" }}>
            Ferda Hanım'ın sevgi dolu ellerinde
          </h2>
          <p className="mt-5 text-gray-700 leading-relaxed">
            Pet Kuaförü, Şanlıurfa'nın ilk ve tek pet oteli, pet kuaförü ve pet shop
            mağazası olarak Ferda Hanım tarafından kuruldu. Amacımız kazanç değil,
            evcil dostlarımızı mutlu etmek. Kapımızdan giren her patiye kendi
            hayvanımızmış gibi özenle yaklaşıyoruz.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Konaklamadan bakıma, mama seçiminden aksesuara kadar her adımda güven,
            hijyen ve sevgi ön planda. Gönül rahatlığıyla emanet edebileceğiniz bir
            adres.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp'tan Yaz
            </a>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 border border-brand-green/30 text-brand-green hover:bg-white font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              İletişim <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Scissors,
    title: "Pet Kuaför",
    desc: "Kedi ve köpekler için profesyonel tıraş, yıkama, tırnak kesimi ve genel bakım. Sevgi dolu ellerde ferahlayın.",
  },
  {
    icon: Home,
    title: "Pet Otel",
    desc: "Güvenli ve sevgi dolu konaklama. Dostunuzu gönül rahatlığıyla emanet edin; biz onunla ilgileniyoruz.",
  },
  {
    icon: ShoppingBag,
    title: "Pet Shop",
    desc: "Kaliteli mama, oyuncak, aksesuar ve bakım ürünleri. Dostunuza en iyisi için buradayız.",
  },
];

function Services() {
  return (
    <section id="hizmetler" className="py-20 md:py-28 px-4 md:px-8 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-xs font-medium">
              <Sparkles className="w-3 h-3" /> Hizmetlerimiz
            </div>
            <h2 className="font-serif-display text-brand-green mt-4 leading-tight" style={{ fontSize: "clamp(32px, 4vw, 54px)" }}>
              Dostunuz için her şey tek çatı altında
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              Konaklama, bakım ve alışveriş — sevgi dolu bir ekibin ellerinde.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} animation="animate-slide-up">
              <div className="group h-full rounded-3xl bg-white p-8 border border-brand-green/10 hover:border-brand-green/30 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-brand-green text-white flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-display text-brand-green text-2xl mt-5">
                  {s.title}
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{s.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 inline-flex items-center gap-1 text-brand-orange font-medium text-sm hover:gap-2 transition-all"
                >
                  Randevu al <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-[1fr_auto] justify-center items-start">
          <Reveal animation="animate-slide-in-left">
            <ServiceHighlightCard />
          </Reveal>
          <Reveal delay={120} animation="animate-slide-in-right">
            <VideoCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  { icon: ShieldCheck, title: "Güvenilir Hizmet", desc: "Hijyen ve güvenlik standartlarında taviz yok." },
  { icon: Sparkles, title: "Kaliteli Ürünler", desc: "Özenle seçilmiş, güvenilir markalar." },
  { icon: HeartHandshake, title: "Sevgi Dolu Bakım", desc: "Deneyimli ekip, her patiye özel ilgi." },
  { icon: Trophy, title: "Urfa'nın İlk Pet Oteli", desc: "Şanlıurfa'da bu alandaki ilk adres." },
];

function WhyUs() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-xs font-medium">
              <PawPrint className="w-3 h-3" /> Neden Biz
            </div>
            <h2 className="font-serif-display text-brand-green mt-4 leading-tight" style={{ fontSize: "clamp(32px, 4vw, 54px)" }}>
              Şanlıurfa'da farkı hissedin
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 100} animation="animate-scale-in">
              <div className="h-full rounded-2xl bg-white p-6 border border-brand-green/10 hover:border-brand-orange/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                  <r.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-display text-brand-green text-xl mt-4">{r.title}</h3>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Ayşe K.",
    text:
      "Kedimin tüm ihtiyaçlarını karşılayan, güvenle emanet edebileceğim bir yer. İlgi ve alaka için teşekkürler.",
  },
  {
    name: "Mehmet Y.",
    text:
      "Urfa'nın ilk ve tek pet oteli. Her konuda çok yardımcı oluyorlar, dostumuzu gönül rahatlığıyla bıraktık.",
  },
  {
    name: "Zeynep A.",
    text:
      "Aradığım tüm ürünleri burada buldum. Ferda Hanım hayvanları kendi hayvanı gibi seviyor, çok mutluyum.",
  },
  {
    name: "Emre T.",
    text:
      "Amacı para değil, hayvanları mutlu etmek. İlgisi ve samimiyeti için tüm ekibe teşekkür ederim.",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="yorumlar" className="py-20 md:py-28 px-4 md:px-8 bg-brand-green text-white relative overflow-hidden">
      <PawPrint className="absolute top-10 left-10 w-24 h-24 text-white/5" />
      <PawPrint className="absolute bottom-10 right-10 w-32 h-32 text-white/5 rotate-45" />
      <div className="max-w-4xl mx-auto text-center relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium">
            <Star className="w-3 h-3 fill-brand-orange text-brand-orange" /> 5.0 · 13 Google Değerlendirmesi
          </div>
          <h2 className="font-serif-display mt-4 leading-tight" style={{ fontSize: "clamp(32px, 4vw, 54px)" }}>
            Müşterilerimiz ne diyor?
          </h2>
        </Reveal>

        <div className="mt-10 min-h-[180px]">
          <div key={i} className="animate-fade-up">
            <div className="flex justify-center gap-1 text-brand-orange">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="w-5 h-5 fill-brand-orange" />
              ))}
            </div>
            <p className="mt-5 font-serif-display text-2xl md:text-3xl leading-snug max-w-3xl mx-auto">
              "{REVIEWS[i].text}"
            </p>
            <div className="mt-5 text-white/80 text-sm">— {REVIEWS[i].name}</div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            aria-label="Önceki"
            onClick={() => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length)}
            className="w-10 h-10 rounded-full border border-white/30 hover:bg-white/10 flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            {REVIEWS.map((_, k) => (
              <button
                key={k}
                aria-label={`Yorum ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-brand-orange" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
          <button
            aria-label="Sonraki"
            onClick={() => setI((v) => (v + 1) % REVIEWS.length)}
            className="w-10 h-10 rounded-full border border-white/30 hover:bg-white/10 flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="rounded-3xl bg-white p-6 md:p-8 border border-brand-green/10 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
      }}
    >
      <h3 className="font-serif-display text-brand-green text-2xl">Bize mesaj bırakın</h3>
      <p className="text-gray-600 text-sm mt-1">En kısa sürede size dönüş yapalım.</p>
      <div className="mt-5 grid gap-3">
        <input
          required
          type="text"
          placeholder="İsim"
          className="w-full rounded-xl border border-brand-green/15 px-4 py-3 text-base md:text-sm outline-none focus:border-brand-green"
        />
        <input
          required
          type="tel"
          placeholder="Telefon"
          className="w-full rounded-xl border border-brand-green/15 px-4 py-3 text-base md:text-sm outline-none focus:border-brand-green"
        />
        <textarea
          required
          rows={4}
          placeholder="Mesajınız"
          className="w-full rounded-xl border border-brand-green/15 px-4 py-3 text-base md:text-sm outline-none focus:border-brand-green resize-none"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium px-5 py-3 rounded-full transition-colors"
        >
          Gönder <ArrowRight className="w-4 h-4" />
        </button>
        {sent && (
          <div className="text-sm text-brand-green text-center">
            Teşekkürler! Mesajınız alındı — en kısa sürede döneceğiz.
          </div>
        )}
      </div>
    </form>
  );
}

function Contact() {
  return (
    <section id="iletisim" className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-xs font-medium">
              <MapPin className="w-3 h-3" /> İletişim
            </div>
            <h2 className="font-serif-display text-brand-green mt-4 leading-tight" style={{ fontSize: "clamp(32px, 4vw, 54px)" }}>
              Bize ulaşın
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              Randevu almak veya sorularınız için bize ulaşmaktan çekinmeyin.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal animation="animate-slide-in-left">
            <div className="rounded-3xl bg-white p-6 md:p-8 border border-brand-green/10 shadow-sm h-full">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500">Adres</div>
                    <div className="text-brand-green font-medium mt-1">{ADDRESS}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500">Telefon</div>
                    <a href={TEL_URL} className="text-brand-green font-medium mt-1 block hover:text-brand-orange">
                      +90 533 403 17 04
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500">Çalışma Saatleri</div>
                    <div className="text-brand-green font-medium mt-1">Pazartesi – Cumartesi · 08:00 – 17:30</div>
                    <div className="text-gray-600 text-sm">Pazar Kapalı</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium px-5 py-3 rounded-full transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp'tan Yaz
                  </a>
                  <a
                    href={TEL_URL}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white font-medium px-5 py-3 rounded-full transition-colors"
                  >
                    <Phone className="w-4 h-4" /> Hemen Ara
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden border border-brand-green/10">
                <iframe
                  title="Harita"
                  src={MAP_EMBED}
                  className="w-full h-64"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal animation="animate-slide-in-right" delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-green text-white/90">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <PawPrint className="w-5 h-5 text-brand-orange" />
            </div>
            <div className="font-serif-display text-white text-2xl">Pet Kuaförü</div>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-md leading-relaxed">
            Şanlıurfa'nın ilk ve tek pet oteli, pet kuaförü ve pet shop mağazası.
            Evcil dostlarınıza sevgiyle bakıyoruz.
          </p>
          <div className="mt-5 flex gap-2">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-white font-medium">İletişim</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-orange" />
              <span>{ADDRESS}</span>
            </li>
            <li>
              <a href={TEL_URL} className="flex items-center gap-2 hover:text-white">
                <Phone className="w-4 h-4 text-brand-orange" /> +90 533 403 17 04
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 shrink-0 text-brand-orange" />
              <span>Pzt – Cmt · 08:00 – 17:30<br />Pazar Kapalı</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-white font-medium">Menü</div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-5 text-xs text-white/60 flex flex-wrap items-center justify-between gap-3">
          <div>© 2026 Pet Kuaförü. Tüm hakları saklıdır.</div>
          <div>Sevgiyle hazırlandı 🐾</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating CTAs (mobile) ---------------- */

function FloatingCTAs() {
  return (
    <div
      className="md:hidden fixed inset-x-4 z-40 flex gap-2 animate-fade-up delay-800"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-orange text-white text-sm font-medium px-4 py-3 rounded-full shadow-lg"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
      <a
        href={TEL_URL}
        className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-green text-white text-sm font-medium px-4 py-3 rounded-full shadow-lg"
      >
        <Phone className="w-4 h-4" /> Ara
      </a>
    </div>
  );
}

/* ---------------- Page ---------------- */

function Index() {
  return (
    <main className="bg-brand-bg pb-24 md:pb-0 overflow-x-clip">
      <Header />
      <div id="anasayfa">
        <DesktopHero />
        <TabletHero />
        <MobileHero />
      </div>
      <TrustBar />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTAs />
    </main>
  );
}
