"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  Layers,
  Server,
  ShoppingBag,
  Gauge,
} from "lucide-react"

const CV_URL =
  "https://drive.google.com/file/d/1lFdFl2PTL0kfZSTx3Vo8QvYm6cmDzN61/view?usp=sharing"
const GITHUB_URL = "https://github.com/najeeudanesi"
const LINKEDIN_URL = "https://www.linkedin.com/in/najiu-danesi-6a836416a/"
const EMAIL = "najeeudanesi@gmail.com"
const PHONE = "+234 809 499 3270"

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]

const capabilities = [
  {
    icon: Layers,
    title: "Frontend engineering",
    body: "Accessible, production-ready interfaces in React, Next.js and Vue — responsive, semantic and built to last across real client storefronts.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    body: "REST APIs and application logic in Ruby on Rails and PHP/Laravel. Comfortable owning a feature from the database to the screen.",
  },
  {
    icon: ShoppingBag,
    title: "eCommerce platforms",
    body: "Shipping and customizing storefronts on Shopify and Magento — themes, integrations and the checkout details that move revenue.",
  },
  {
    icon: Gauge,
    title: "Performance & access",
    body: "Improving Core Web Vitals and meeting WCAG 2.1 AA — fast, usable products for everyone, including users on assistive tech.",
  },
]

const experiences = [
  {
    title: "Software Developer",
    company: "Outsource Global",
    meta: "Remote · Apr 2023 — Present",
    points: [
      "Built and shipped frontend features for client eCommerce platforms in React.js and JavaScript, delivering responsive, production-ready storefronts.",
      "Improved site performance and Core Web Vitals across client projects, optimizing load times and rendering efficiency.",
      "Implemented WCAG 2.1 AA accessibility standards, improving usability for users on assistive technology.",
      "Developed and customized themes and integrations on Shopify and Magento.",
    ],
    tags: ["React.js", "JavaScript", "Shopify", "Magento", "Accessibility"],
  },
  {
    title: "Frontend Developer (Contract)",
    company: "Contrack Innovation Hub",
    meta: "Mar 2024 — Nov 2024",
    points: [
      "Implemented designs and prototypes in Vue.js and Nuxt for a full-scale eCommerce platform.",
      "Contributed to planning and architecture across the build.",
      "Prepared and maintained clear, accurate program documentation.",
    ],
    tags: ["Vue.js", "Nuxt", "eCommerce"],
  },
  {
    title: "Frontend Developer (Contract)",
    company: "Greenzone Technologies",
    meta: "Nov 2023 — May 2024",
    points: [
      "Implemented designs in React and integrated REST APIs across the application.",
      "Maintained the website and shipped updates that enhanced the user experience.",
      "Built responsive, user-friendly interfaces.",
    ],
    tags: ["React", "REST APIs", "Responsive"],
  },
  {
    title: "Software Developer & Web Dev Tutor",
    company: "CoreByte Edge Solutions",
    meta: "2021 — 2022",
    points: [
      "Taught web development fundamentals — HTML, CSS, JavaScript — guiding students through building functional projects.",
      "Maintained and updated company and client websites, improving UX and performance.",
      "Authored and maintained technical documentation for clarity and consistency.",
    ],
    tags: ["HTML/CSS", "JavaScript", "Mentoring"],
  },
]

const stack = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Ruby", "PHP", "Java", "C#", "C"] },
  { group: "Frontend", items: ["React.js", "Next.js", "Vue.js", "Nuxt", "React Native", "Tailwind CSS", "Material UI"] },
  { group: "Backend", items: ["Ruby on Rails", "PHP / Laravel", "Nest.js", "REST APIs"] },
  { group: "Data & Cloud", items: ["PostgreSQL", "SQL", "Firebase", "AWS"] },
  { group: "Design", items: ["Figma", "Adobe XD", "Illustrator", "Photoshop"] },
  { group: "Practices", items: ["Git", "WCAG 2.1 AA", "Performance", "Agile / async"] },
]

const projects = [
  {
    title: "IEFA",
    role: "Team Lead · Full-Stack",
    description:
      "Backend Engineer. Responsible for the architecture, design and implementation of backend apis using nest.js, postgresql, as well as mentoring junior developers, and leading the frontend team to build responsive, user-friendly interfaces and optimize the website for performance and accessibility",
    thumbnail: "/project-thumbnails/iefa-thumbnail.png",
    link: "https://iefa.ng",
  },
  {
    title: "ERP OUTSOURCE GLOBAL",
    role: "Lead Frontend Engineer",
    description:
      "An ERP system for outsource global, built in next.js, using typescript, shadcn ui and tailwind css with real-time data visualization and user management.",
    thumbnail: "/project-thumbnails/ERP-thumbnail.png",
    link: "https://erp.outsourceglobal.com",
  },
  {
    title: "Crown Takaful",
    role: "Design . Frontend",
    description:
      "Website, mobile app design and admin dashboard for an Islamicc insurance company — Figma and WordPress for the site, Next.js and Tailwind for the dashboard.",
    thumbnail: "/project-thumbnails/Crown-Takaful-Thumbnail.png",
    link: "https://crowntakaful.com",
 },
  
]

/* Reveal-on-scroll — the single, restrained motion on the page */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
      <span className="text-primary">{index}</span>
      <span className="h-px w-8 bg-border" />
      <span>{children}</span>
    </div>
  )
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useReveal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const goTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="grain min-h-screen bg-background text-foreground selection:bg-primary/15">
      {/* ---------- Nav ---------- */}
      <nav
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="#" className="flex items-center gap-2.5" aria-label="Najiu Danesi — home">
            <img src="/logo.svg" alt="" className="h-7 w-7 rounded-md" />
            <span className="font-display text-lg tracking-tight">Najiu Danesi</span>
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {NAV.map((item) => (
              <button
                key={item.href}
                onClick={() => goTo(item.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
            <Link
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-4 py-1.5 text-sm transition-colors hover:border-foreground/40"
            >
              CV <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-border bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-80 border-b" : "max-h-0"
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {NAV.map((item) => (
              <button
                key={item.href}
                onClick={() => goTo(item.href)}
                className="border-b border-border/60 py-3 text-left text-sm text-muted-foreground last:border-0 hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
            <Link
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-left text-sm text-primary"
            >
              Download CV →
            </Link>
          </div>
        </div>
      </nav>

      {/* ---------- Hero ---------- */}
      <header className="relative px-6 pt-36 pb-20 md:pt-44 md:pb-28">
        <div ref={heroRef} className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="reveal">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for full-stack roles &amp; projects
            </div>

            <h1 className="font-display text-[2.7rem] leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.2rem]">
              I build products
              <br />
              end-to-end —{" "}
              <span className="text-primary">interface</span>
              <br className="hidden sm:block" /> to infrastructure.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I&apos;m Najiu Danesi, a full-stack software engineer with{" "}
              <span className="text-foreground">6+ years</span> shipping production web applications —
              from accessible React and Next.js frontends to Ruby on Rails and PHP/Laravel backends.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => goTo("#work")}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View selected work <ArrowUpRight className="h-4 w-4" />
              </button>
              <Link
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/50"
              >
                <Download className="h-4 w-4" /> Download CV
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Abuja, Nigeria · Remote
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span>React · Next.js · Rails · Laravel</span>
            </div>
          </div>

          {/* Portrait */}
          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-primary/30" />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                {/* Drop your headshot at /public/profile.jpg */}
                <img
                  src="/profile.jpg"
                  alt="Najiu Danesi"
                  className="aspect-[4/5] w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder-user.jpg"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- About ---------- */}
      <section id="about" className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <SectionLabel index="01">About</SectionLabel>
          </div>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.5fr]">
            <p className="reveal font-display text-2xl leading-[1.45] tracking-tight sm:text-[2rem] sm:leading-[1.4]">
              I like owning a feature from the database to the screen. Over the last six years
              I&apos;ve delivered production eCommerce, optimized performance, met accessibility
              standards, led small teams, and used AI tooling to ship faster without sacrificing
              quality.
            </p>
            <dl className="reveal space-y-6 text-sm" style={{ transitionDelay: "100ms" }}>
              {[
                ["Experience", "6+ years, full-stack"],
                ["Focus", "Web apps & eCommerce"],
                ["Education", "Adv. Frontend Dev — Qwasar Silicon Valley"],
                ["Languages", "English (professional)"],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-border pb-5">
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{k}</dt>
                  <dd className="mt-1.5 text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- Capabilities ---------- */}
      <section className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <SectionLabel index="02">What I do</SectionLabel>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {capabilities.map((c, i) => {
              const Icon = c.icon
              return (
                <div
                  key={c.title}
                  className="reveal group bg-card p-8 transition-colors hover:bg-accent/40 md:p-10"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl tracking-tight">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section id="experience" className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <SectionLabel index="03">Experience</SectionLabel>
          </div>
          <div className="mt-12 space-y-px overflow-hidden rounded-xl border border-border bg-border">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="reveal grid gap-6 bg-card p-8 md:grid-cols-[0.32fr_0.68fr] md:p-10"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div>
                  <h3 className="font-display text-xl tracking-tight">{exp.title}</h3>
                  <p className="mt-1 text-primary">{exp.company}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {exp.meta}
                  </p>
                </div>
                <div>
                  <ul className="space-y-3 text-muted-foreground">
                    {exp.points.map((p, j) => (
                      <li key={j} className="flex gap-3 leading-relaxed">
                        <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Selected Work ---------- */}
      <section id="work" className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal flex items-end justify-between gap-6">
            <SectionLabel index="04">Selected work</SectionLabel>
            <p className="hidden max-w-xs text-right text-sm text-muted-foreground sm:block">
              A mix of full-stack builds, frontend engineering and product design.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => {
              const card = (
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="relative aspect-[16/10] overflow-hidden bg-accent">
                    <img
                      src={project.thumbnail || "/placeholder.jpg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                      {project.role}
                    </span>
                    <h3 className="mt-2 flex items-center gap-1.5 font-display text-xl tracking-tight">
                      {project.title}
                      {project.link && (
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                      )}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </article>
              )
              return project.link ? (
                <Link
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal"
                  style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                >
                  {card}
                </Link>
              ) : (
                <div key={project.title} className="reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  {card}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- Stack ---------- */}
      <section id="stack" className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <SectionLabel index="05">Stack</SectionLabel>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((s, i) => (
              <div key={s.group} className="reveal" style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="text-foreground/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" className="border-t border-border px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <SectionLabel index="06">Contact</SectionLabel>
          </div>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.6fr]">
            <div className="reveal">
              <h2 className="font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
                Let&apos;s build
                <br />
                something <span className="text-primary">solid</span>.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Available for full-stack roles and freelance projects. The fastest way to reach me is
                email — I read every message.
              </p>
              <Link
                href={`mailto:${EMAIL}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" /> {EMAIL}
              </Link>
            </div>

            <div className="reveal space-y-px overflow-hidden rounded-xl border border-border bg-border" style={{ transitionDelay: "100ms" }}>
              {[
                { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: Mail },
                { label: "GitHub", value: "github.com/najeeudanesi", href: GITHUB_URL, icon: Github },
                { label: "LinkedIn", value: "Najiu Danesi", href: LINKEDIN_URL, icon: Linkedin },
                { label: "Phone", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}`, icon: null },
              ].map((row) => (
                <Link
                  key={row.label}
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between bg-card px-6 py-5 transition-colors hover:bg-accent/40"
                >
                  <span className="flex items-center gap-3">
                    {row.icon && <row.icon className="h-4 w-4 text-primary" />}
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {row.label}
                    </span>
                  </span>
                  <span className="flex items-center gap-2 text-sm text-foreground">
                    {row.value}
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <span className="font-display text-base text-foreground">Najiu Danesi</span>
          <span>© {new Date().getFullYear()} — Full-stack software engineer · Abuja, Nigeria</span>
        </div>
      </footer>
    </div>
  )
}
