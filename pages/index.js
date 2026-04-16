import Head from "next/head";
import { useState } from "react";

const canonicalUrl = "https://landing-moustiquaires.vercel.app/"; // A remplacer par l'URL finale
const showroomUrl =
  "https://www.caseo-maison.com/magasins/page/caseo-chambery-voglans-85/magasin-fenetre-chambery-caseo-71";
const devisUrl = "https://www.caseo-maison.com/devis";
const mapsUrl =
  "https://www.google.com/maps/place/CASEO+Chamb%C3%A9ry/@45.5644385,5.8911212,17z/";
const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775923.340662299!2d1.4331651417110982!3d47.19970105736059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba7f4992eba1f%3A0x9ea3fb9aab31d495!2zQ0FTw4lPIENoYW1iw6lyeQ!5e0!3m2!1sfr!2sfr!4v1776328547399!5m2!1sfr!2sfr";

const openingHours = [
  { day: "Lundi", hours: "08h00-12h00 / 13h30-18h00" },
  { day: "Mardi", hours: "08h00-12h00 / 13h30-18h00" },
  { day: "Mercredi", hours: "08h00-12h00 / 13h30-18h00" },
  { day: "Jeudi", hours: "08h00-12h00 / 13h30-18h00" },
  { day: "Vendredi", hours: "08h00-12h00 / 13h30-18h00" },
  { day: "Samedi", hours: "09h00-13h00" },
  { day: "Dimanche", hours: "Fermé" },
];

const solutions = [
  {
    num: "01",
    title: "Moustiquaire enroulable",
    desc: "La solution la plus populaire pour les fenêtres. Elle se relève en un geste, se range discrètement dans un coffre fin et s'adapte à toutes les largeurs.",
    ideal: "Idéale pour : fenêtres de chambre, cuisine, salle de bain",
  },
  {
    num: "02",
    title: "Moustiquaire plissée",
    desc: "Un accordéon de fibre ultra-fine qui glisse sans effort sur des rails. Elle s'ouvre sur toute la largeur, sans obstruer la vue ni l'entrée d'air.",
    ideal: "Idéale pour : portes-fenêtres, baies coulissantes",
  },
  {
    num: "03",
    title: "Moustiquaire fixe",
    desc: "Montée une fois, elle protège en permanence sans aucune manipulation. Légère, robuste, quasiment invisible grâce à sa toile fine.",
    ideal: "Idéale pour : ouvertures peu sollicitées, caves, vérandas",
  },
];

const reasons = [
  {
    number: "01",
    title: "Showroom à Chambéry",
    text: "Venez découvrir nos moustiquaires au showroom de Chambéry. L'équipe vous accueille, vous conseille et vous oriente vers la solution la plus adaptée.",
  },
  {
    number: "02",
    title: "Fabriqué sur vos cotes",
    text: "Chaque moustiquaire est fabriquée à partir de vos dimensions exactes. Pas de découpe approximative, pas de jeu qui laisse passer les insectes.",
  },
  {
    number: "03",
    title: "Pose par nos techniciens",
    text: "Nos techniciens prennent les mesures sur place et assurent l'installation. Vous n'avez rien à gérer.",
  },
  {
    number: "04",
    title: "Résultat durable",
    text: "Toile anti-insectes résistante aux UV, cadre aluminium traité, fixations solides : une solution conçue pour durer.",
  },
];

const zones = [
  "Chambéry",
  "Voglans",
  "La Motte-Servolex",
  "Bassens",
  "Cognin",
  "Barberaz",
  "Aix-les-Bains",
  "Le Bourget-du-Lac",
];

const faqs = [
  {
    question: "Quel type de moustiquaire choisir pour ma fenêtre ?",
    answer:
      "Pour une fenêtre standard, la moustiquaire enroulable est souvent le meilleur choix : elle est discrète, simple à utiliser et s'adapte à toutes les largeurs. Pour une porte-fenêtre ou une baie vitrée, la moustiquaire plissée est généralement plus confortable.",
  },
  {
    question: "Faut-il obligatoirement une moustiquaire sur mesure ?",
    answer:
      "Pour une baie vitrée ou une porte-fenêtre, oui : le sur-mesure est indispensable pour obtenir une ouverture fluide et une finition propre. Pour les fenêtres, cela garantit aussi un rendu beaucoup plus soigné qu'un modèle universel.",
  },
  {
    question: "Comment se passe la prise de mesures ?",
    answer:
      "Vous pouvez demander un devis en ligne ou appeler directement le showroom Caséo Chambéry. Un technicien peut ensuite intervenir pour mesurer précisément vos ouvertures avant fabrication.",
  },
  {
    question: "Caséo Chambéry intervient-il autour de Chambéry ?",
    answer:
      "Oui. Nous intervenons à Chambéry et dans les communes environnantes : Voglans, La Motte-Servolex, Cognin, Bassens, Barberaz, Aix-les-Bains et Le Bourget-du-Lac.",
  },
  {
    question: "Quels sont les horaires du showroom Caséo Chambéry ?",
    answer:
      "Le showroom est ouvert du lundi au vendredi de 08h00 à 12h00 puis de 13h30 à 18h00, et le samedi de 09h00 à 13h00. Le dimanche, le magasin est fermé.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Caséo Chambéry - Menuiserie Diffusion",
  image: canonicalUrl,
  url: canonicalUrl,
  telephone: "+33479344852",
  description:
    "Caséo Chambéry accompagne les projets de moustiquaires sur mesure pour fenêtres, portes-fenêtres et baies vitrées à Chambéry et alentours.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "381 Avenue de Villarcher",
    postalCode: "73000",
    addressLocality: "Chambéry",
    addressCountry: "FR",
  },
  areaServed: zones.map((city) => ({ "@type": "City", name: city })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Caséo",
    url: "https://www.caseo-maison.com/",
  },
  sameAs: [showroomUrl, mapsUrl],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>
          Moustiquaire Chambéry : pose sur mesure fenêtres et baies | Caséo
          Chambéry
        </title>
        <meta
          name="description"
          content="Caséo Chambéry installe vos moustiquaires sur mesure pour fenêtres, portes-fenêtres et baies vitrées. Devis gratuit, prise de mesures à domicile, pose soignée à Chambéry et alentours."
        />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />
        <meta
          property="og:title"
          content="Moustiquaire Chambéry | Caséo Chambéry"
        />
        <meta
          property="og:description"
          content="Moustiquaires sur mesure à Chambéry. Fenêtres, portes-fenêtres, baies vitrées. Devis gratuit."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="theme-color" content="#f48221" />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <style jsx global>{`
        :root {
          --orange: #f48221;
          --orange-dark: #d96e10;
          --orange-light: #fff4eb;
          --navy: #1a2340;
          --navy-mid: #2c3a5c;
          --text: #1a2340;
          --muted: #5a6a85;
          --border: #e4e8f0;
          --bg: #fafaf8;
          --white: #ffffff;
          --font-display: "Avenir Next", "Segoe UI", system-ui, sans-serif;
          --font-body: "Avenir Next", "Segoe UI", system-ui, sans-serif;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: var(--font-body); background: var(--bg); color: var(--text); }

        .container { max-width: 1120px; margin: 0 auto; padding: 0 24px; }

        .header {
          position: sticky; top: 0; z-index: 50;
          background: rgba(250,250,248,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .header-inner {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 24px; max-width: 1120px; margin: 0 auto;
        }
        .logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .logo-badge {
          width: 42px; height: 42px; border-radius: 12px;
          background: linear-gradient(135deg, var(--orange) 0%, #ff9a3c 100%);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-weight: 800; font-size: 18px; color: white;
          box-shadow: 0 10px 24px rgba(244,130,33,0.2);
        }
        .logo-text { line-height: 1.2; }
        .logo-text strong { display: block; font-family: var(--font-display); font-size: 15px; font-weight: 800; color: var(--navy); }
        .logo-text span { font-size: 12px; color: var(--muted); }
        .nav { display: flex; align-items: center; gap: 28px; }
        .nav a { font-size: 14px; font-weight: 600; color: var(--muted); text-decoration: none; transition: color .2s; }
        .nav a:hover { color: var(--navy); }

        .btn-orange,
        .btn-outline,
        .btn-white,
        .btn-ghost,
        .btn-navy {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 999px; text-decoration: none; font-weight: 700; cursor: pointer;
          transition: transform .15s, background .2s, border-color .2s, color .2s;
          white-space: nowrap;
        }
        .btn-orange {
          background: var(--orange); color: white; padding: 12px 24px; border: none;
          box-shadow: 0 14px 28px rgba(244,130,33,0.18);
        }
        .btn-orange:hover { background: var(--orange-dark); transform: translateY(-1px); }

        .btn-navy {
          background: var(--navy); color: white; padding: 11px 22px; border: none;
        }
        .btn-navy:hover { transform: translateY(-1px); }

        .btn-outline {
          border: 1.5px solid var(--border); background: white; color: var(--navy);
          padding: 11px 22px;
        }
        .btn-outline:hover { border-color: var(--navy); transform: translateY(-1px); }

        .btn-white {
          background: white; color: var(--navy); padding: 14px 28px;
        }
        .btn-white:hover { transform: translateY(-2px); }

        .btn-ghost {
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
          color: white; padding: 14px 28px;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.18); }

        .hero {
          padding: 72px 24px 80px;
          background: linear-gradient(160deg, #fffaf5 0%, var(--bg) 60%);
          position: relative; overflow: hidden;
        }
        .hero::before {
          content: "";
          position: absolute; top: -80px; right: -80px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(244,130,33,0.10) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-inner {
          max-width: 1120px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
        }
        .hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--orange-light); border: 1px solid rgba(244,130,33,0.2);
          padding: 6px 14px; border-radius: 50px;
          font-size: 13px; font-weight: 700; color: var(--orange-dark);
          margin-bottom: 24px;
        }
        .hero-tag::before {
          content: "";
          width: 6px; height: 6px; background: var(--orange); border-radius: 50%;
        }
        h1 {
          font-family: var(--font-display); font-size: clamp(36px, 4vw, 52px);
          font-weight: 800; line-height: 1.08; color: var(--navy);
          margin-bottom: 20px;
        }
        h1 em { font-style: normal; color: var(--orange); }
        .hero-desc {
          font-size: 17px; line-height: 1.7; color: var(--muted);
          max-width: 520px; margin-bottom: 36px;
        }
        .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
        .hero-stats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
          margin-top: 40px;
        }
        .stat-card {
          background: white; border: 1px solid var(--border);
          border-radius: 14px; padding: 18px 16px;
        }
        .stat-card strong {
          display: block; font-family: var(--font-display); font-size: 26px; font-weight: 800; color: var(--navy);
        }
        .stat-card span { font-size: 13px; color: var(--muted); margin-top: 2px; display: block; }

        .hero-card {
          background: var(--navy);
          border-radius: 24px; padding: 36px;
          color: white; position: relative; overflow: hidden;
        }
        .hero-card::after {
          content: "";
          position: absolute; bottom: -60px; right: -60px;
          width: 220px; height: 220px; border-radius: 50%;
          background: rgba(244,130,33,0.15);
          pointer-events: none;
        }
        .hero-card-label {
          font-size: 11px; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; color: rgba(255,255,255,0.5);
          margin-bottom: 6px;
        }
        .hero-card h2 {
          font-family: var(--font-display); font-size: 28px; font-weight: 800;
          line-height: 1.2; margin-bottom: 16px;
        }
        .hero-card p { font-size: 15px; line-height: 1.7; color: rgba(255,255,255,0.72); margin-bottom: 24px; }
        .hero-card-info {
          background: rgba(255,255,255,0.08); border-radius: 14px;
          padding: 18px; margin-bottom: 18px;
        }
        .hero-card-info p { margin: 0; font-size: 14px; line-height: 1.8; color: rgba(255,255,255,0.9); }
        .hero-card-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
        .zones-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
        .zone-pill {
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px; padding: 5px 12px; font-size: 12px; color: rgba(255,255,255,0.78);
        }

        .trust-bar {
          background: white; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          padding: 20px 24px;
        }
        .trust-inner {
          max-width: 1120px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
        }
        .trust-item { display: flex; align-items: flex-start; gap: 12px; }
        .trust-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: var(--orange-light); border: 1px solid rgba(244,130,33,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 800; color: var(--orange-dark); flex-shrink: 0;
        }
        .trust-item strong { display: block; font-size: 14px; font-weight: 700; color: var(--navy); }
        .trust-item span { font-size: 13px; color: var(--muted); }

        section { padding: 80px 24px; }
        .section-tag {
          font-size: 12px; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase; color: var(--orange);
          margin-bottom: 12px;
        }
        h2 {
          font-family: var(--font-display); font-size: clamp(28px, 3vw, 40px);
          font-weight: 800; line-height: 1.15; color: var(--navy);
          margin-bottom: 16px;
        }
        .section-desc { font-size: 17px; line-height: 1.7; color: var(--muted); max-width: 620px; }

        .solutions-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }
        .solution-card {
          background: white; border: 1px solid var(--border);
          border-radius: 20px; padding: 32px;
          transition: transform .2s, box-shadow .2s;
        }
        .solution-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(26,35,64,0.08); }
        .solution-num {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 12px;
          background: var(--navy); color: white;
          font-family: var(--font-display); font-size: 14px; font-weight: 800;
          margin-bottom: 20px;
        }
        .solution-card h3 { font-family: var(--font-display); font-size: 20px; font-weight: 800; color: var(--navy); margin-bottom: 12px; }
        .solution-card p { font-size: 15px; line-height: 1.7; color: var(--muted); margin-bottom: 16px; }
        .solution-tag {
          font-size: 12px; font-weight: 700; color: var(--orange-dark);
          background: var(--orange-light); border-radius: 50px;
          padding: 4px 12px; display: inline-block;
        }

        .pourquoi-bg { background: #f3ede5; }
        .pourquoi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
        .reasons-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .reason-card {
          background: white; border: 1px solid var(--border);
          border-radius: 18px; padding: 24px;
        }
        .reason-number {
          display: inline-flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 10px;
          background: var(--orange-light); color: var(--orange-dark);
          font-size: 12px; font-weight: 800; margin-bottom: 12px;
        }
        .reason-card h3 { font-family: var(--font-display); font-size: 17px; font-weight: 800; color: var(--navy); margin-bottom: 8px; }
        .reason-card p { font-size: 14px; line-height: 1.7; color: var(--muted); }

        .process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
        .process-step { text-align: center; }
        .step-circle {
          width: 56px; height: 56px; border-radius: 50%;
          border: 2px solid var(--orange); background: white;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-size: 20px; font-weight: 800; color: var(--orange);
          margin: 0 auto 16px;
        }
        .process-step h3 { font-family: var(--font-display); font-size: 16px; font-weight: 800; color: var(--navy); margin-bottom: 8px; }
        .process-step p { font-size: 14px; line-height: 1.6; color: var(--muted); }

        .local-grid {
          display: grid; grid-template-columns: 1.05fr .95fr; gap: 28px; margin-top: 48px; align-items: start;
        }
        .map-card,
        .hours-card {
          background: white; border: 1px solid var(--border); border-radius: 20px; overflow: hidden;
          box-shadow: 0 12px 32px rgba(26,35,64,0.05);
        }
        .map-frame { width: 100%; height: 420px; border: 0; display: block; }
        .map-actions { padding: 18px; display: flex; flex-wrap: wrap; gap: 10px; border-top: 1px solid var(--border); }
        .hours-card-inner { padding: 28px; }
        .hours-head {
          margin-bottom: 20px;
        }
        .hours-head p {
          font-size: 14px; color: var(--muted); line-height: 1.7;
        }
        .hours-list { display: grid; gap: 10px; }
        .hours-row {
          display: flex; justify-content: space-between; gap: 16px;
          padding: 12px 0; border-bottom: 1px solid var(--border);
          font-size: 14px;
        }
        .hours-row:last-child { border-bottom: none; }
        .hours-row strong { color: var(--navy); font-weight: 700; }
        .hours-row span { color: var(--muted); text-align: right; }
        .hours-note {
          margin-top: 20px;
          padding: 16px;
          background: var(--orange-light);
          border: 1px solid rgba(244,130,33,0.18);
          border-radius: 14px;
          font-size: 13px;
          line-height: 1.7;
          color: var(--orange-dark);
        }

        .zones-section { background: var(--navy); color: white; }
        .zones-section h2 { color: white; }
        .zones-section .section-tag { color: rgba(244,130,33,0.9); }
        .zones-section .section-desc { color: rgba(255,255,255,0.65); max-width: 600px; }
        .zones-grid { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 36px; }
        .zone-pill-large {
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px; padding: 8px 20px;
          font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.85);
        }
        .zone-pill-large.primary {
          background: rgba(244,130,33,0.2); border-color: rgba(244,130,33,0.3);
          color: #ffc080;
        }

        .faq-list { margin-top: 40px; display: grid; gap: 12px; }
        .faq-item {
          background: white; border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden;
        }
        .faq-question {
          width: 100%; text-align: left; background: none; border: none;
          padding: 20px 24px; cursor: pointer;
          display: flex; justify-content: space-between; align-items: center;
          font-family: var(--font-body); font-size: 16px; font-weight: 700; color: var(--navy);
          gap: 16px;
        }
        .faq-icon {
          width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
          background: var(--orange-light); border: 1px solid rgba(244,130,33,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; color: var(--orange); transition: transform .2s;
        }
        .faq-icon.open { transform: rotate(45deg); }
        .faq-answer { padding: 0 24px 20px; font-size: 15px; line-height: 1.75; color: var(--muted); }

        .cta-section {
          background: linear-gradient(135deg, var(--navy) 0%, #2c3a5c 100%);
          border-radius: 24px; padding: 60px 48px;
          display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: center;
          margin: 0 24px 80px;
        }
        .cta-section h2 { color: white; font-size: clamp(26px, 3vw, 38px); }
        .cta-section p { color: rgba(255,255,255,0.7); font-size: 16px; line-height: 1.7; margin-top: 12px; }
        .cta-buttons { display: flex; flex-direction: column; gap: 12px; min-width: 230px; }

        footer {
          background: white; border-top: 1px solid var(--border);
          padding: 28px 24px;
        }
        .footer-inner {
          max-width: 1120px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
          font-size: 13px; color: var(--muted);
        }
        .footer-inner a { color: var(--muted); text-decoration: none; transition: color .2s; }
        .footer-inner a:hover { color: var(--navy); }
        .footer-links { display: flex; gap: 24px; flex-wrap: wrap; }

        @media (max-width: 900px) {
          .hero-inner,
          .pourquoi-grid,
          .local-grid,
          .cta-section { grid-template-columns: 1fr; }
          .solutions-grid { grid-template-columns: 1fr; }
          .process-steps { grid-template-columns: 1fr 1fr; }
          .trust-inner { grid-template-columns: 1fr; }
          .nav { display: none; }
          .cta-section { padding: 40px 28px; }
        }
        @media (max-width: 600px) {
          .reasons-grid { grid-template-columns: 1fr; }
          .process-steps,
          .hero-stats { grid-template-columns: 1fr; }
          .cta-section { margin: 0 16px 60px; }
          .map-frame { height: 320px; }
        }
      `}</style>

      <header className="header">
        <div className="header-inner">
          <a href="#top" className="logo">
            <div className="logo-badge">C</div>
            <div className="logo-text">
              <strong>Caséo Chambéry</strong>
              <span>Moustiquaires sur mesure</span>
            </div>
          </a>
          <nav className="nav">
            <a href="#solutions">Nos solutions</a>
            <a href="#pourquoi">Pourquoi Caséo</a>
            <a href="#local">Magasin & horaires</a>
            <a href="#faq">FAQ</a>
            <a href={devisUrl} className="btn-orange">
              Demander un devis
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div>
            <div className="hero-tag">Caséo Chambéry — Voglans</div>
            <h1>
              Moustiquaires <em>sur mesure</em> à Chambéry
            </h1>
            <p className="hero-desc">
              Fenêtres, portes-fenêtres, baies vitrées : protégez vos pièces des
              insectes tout l'été sans renoncer à l'air frais. L'équipe Caséo
              Chambéry mesure, fabrique et pose votre moustiquaire.
            </p>
            <div className="hero-ctas">
              <a href={devisUrl} className="btn-orange">
                Demander un devis gratuit
              </a>
              <a href="tel:+33479344852" className="btn-outline">
                Appeler le showroom
              </a>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-outline">
                Itinéraire magasin
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <strong>100%</strong>
                <span>sur mesure</span>
              </div>
              <div className="stat-card">
                <strong>Local</strong>
                <span>Showroom Chambéry</span>
              </div>
              <div className="stat-card">
                <strong>Pose</strong>
                <span>par nos techniciens</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-label">Showroom Caséo Chambéry</div>
            <h2>Votre projet commence ici</h2>
            <p>
              Venez découvrir nos moustiquaires au showroom de Chambéry. Nos
              conseillers vous guident vers la solution la mieux adaptée à votre
              logement et à vos ouvertures.
            </p>
            <div className="hero-card-info">
              <p>
                <strong style={{ color: "white" }}>Menuiserie Diffusion</strong>
                <br />
                381 Avenue de Villarcher, 73000 Chambéry
                <br />
                <a href="tel:+33479344852">04 79 34 48 52</a>
              </p>
            </div>
            <div className="hero-card-actions">
              <a href={devisUrl} className="btn-orange">
                Devis en ligne
              </a>
              <a href={showroomUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                Page magasin
              </a>
            </div>
            <div className="zones-wrap">
              {zones.map((z) => (
                <span key={z} className="zone-pill">
                  {z}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="trust-inner">
          <div className="trust-item">
            <div className="trust-icon">01</div>
            <div>
              <strong>Prise de mesures à domicile</strong>
              <span>Nos techniciens se déplacent chez vous</span>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">02</div>
            <div>
              <strong>Fabrication sur vos cotes</strong>
              <span>Chaque moustiquaire est unique</span>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">03</div>
            <div>
              <strong>Installation professionnelle</strong>
              <span>Posée proprement, durable dans le temps</span>
            </div>
          </div>
        </div>
      </div>

      <section id="solutions">
        <div className="container">
          <p className="section-tag">Moustiquaire Chambéry</p>
          <h2>Des solutions adaptées à chaque ouverture</h2>
          <p className="section-desc">
            Fenêtre de chambre, porte-fenêtre de terrasse ou grande baie vitrée
            : nous avons la moustiquaire faite pour vous.
          </p>
          <div className="solutions-grid">
            {solutions.map((s) => (
              <div key={s.num} className="solution-card">
                <div className="solution-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="solution-tag">{s.ideal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pourquoi" className="pourquoi-bg">
        <div className="container">
          <div className="pourquoi-grid">
            <div>
              <p className="section-tag">Pourquoi choisir Caséo Chambéry</p>
              <h2>Un showroom local, une équipe qui se déplace</h2>
              <p className="section-desc" style={{ marginBottom: 32 }}>
                Vous n'achetez pas une moustiquaire générique. Vous faites
                confiance à une équipe locale qui connaît votre secteur, vos
                maisons et vos contraintes d'ouverture.
              </p>
              <div
                style={{
                  background: "var(--navy)",
                  borderRadius: 20,
                  padding: "28px 28px",
                  color: "white",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "rgba(244,130,33,0.9)",
                    marginBottom: 8,
                  }}
                >
                  Showroom ouvert à Chambéry
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 800,
                    marginBottom: 12,
                    color: "white",
                    lineHeight: 1.2,
                  }}
                >
                  Venez voir et comparer avant de choisir
                </p>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: 0,
                  }}
                >
                  Au showroom Caséo Chambéry, vous pouvez voir les modèles,
                  comprendre les différences et repartir vers un devis adapté à
                  votre projet.
                </p>
              </div>
            </div>
            <div className="reasons-grid">
              {reasons.map((r) => (
                <div key={r.title} className="reason-card">
                  <div className="reason-number">{r.number}</div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="section-tag">Comment ça se passe</p>
          <h2>De la prise de contact à la pose, on s'occupe de tout</h2>
          <div className="process-steps">
            {[
              {
                n: "1",
                title: "Vous nous contactez",
                desc: "Par téléphone ou via la page devis. On vous rappelle rapidement pour comprendre votre besoin.",
              },
              {
                n: "2",
                title: "Prise de mesures",
                desc: "Un technicien se déplace chez vous pour mesurer précisément vos ouvertures et vous conseiller.",
              },
              {
                n: "3",
                title: "Fabrication sur mesure",
                desc: "Votre moustiquaire est fabriquée selon vos dimensions exactes, en général sous 1 à 2 semaines.",
              },
              {
                n: "4",
                title: "Pose et mise en service",
                desc: "Notre équipe installe, vérifie et vous montre comment utiliser votre moustiquaire.",
              },
            ].map((s) => (
              <div key={s.n} className="process-step">
                <div className="step-circle">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="local">
        <div className="container">
          <p className="section-tag">Magasin & horaires</p>
          <h2>Retrouvez Caséo Chambéry au showroom</h2>
          <p className="section-desc">
            Tu voulais des accès directs vers le magasin, la carte et les
            horaires : cette section regroupe tout ce qu'il faut pour convertir
            une recherche locale en prise de contact réelle.
          </p>

          <div className="local-grid">
            <div className="map-card">
              <iframe
                src={mapsEmbedUrl}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-frame"
                title="Carte Caséo Chambéry"
              />
              <div className="map-actions">
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-orange">
                  Voir l'itinéraire
                </a>
                <a href={showroomUrl} target="_blank" rel="noreferrer" className="btn-outline">
                  Voir la page magasin
                </a>
                <a href={devisUrl} className="btn-outline">
                  Faire une demande de devis
                </a>
              </div>
            </div>

            <div className="hours-card">
              <div className="hours-card-inner">
                <div className="hours-head">
                  <p className="section-tag" style={{ marginBottom: 8 }}>
                    Horaires showroom
                  </p>
                  <h2 style={{ fontSize: 28, marginBottom: 10 }}>
                    Caséo Chambéry
                  </h2>
                  <p>
                    Menuiserie Diffusion
                    <br />
                    381 Avenue de Villarcher
                    <br />
                    73000 Chambéry
                  </p>
                </div>

                <div className="hours-list">
                  {openingHours.map((item) => (
                    <div className="hours-row" key={item.day}>
                      <strong>{item.day}</strong>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="hours-note">
                  Horaires relevés sur la page officielle Caséo Chambéry. Pense à
                  les mettre à jour si le magasin change d'amplitude horaire.
                </div>

                <div style={{ display: "grid", gap: 10, marginTop: 20 }}>
                  <a href="tel:+33479344852" className="btn-navy">
                    Appeler le 04 79 34 48 52
                  </a>
                  <a href={devisUrl} className="btn-orange">
                    Demander un devis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="zones" className="zones-section">
        <div className="container">
          <p className="section-tag">Zones desservies</p>
          <h2>Chambéry et ses environs</h2>
          <p className="section-desc">
            Nous intervenons pour la pose de moustiquaires sur mesure à Chambéry
            et dans les communes alentour du bassin chambérien.
          </p>
          <div className="zones-grid">
            {zones.map((z, i) => (
              <span key={z} className={`zone-pill-large ${i === 0 ? "primary" : ""}`}>
                {z}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <p className="section-tag">FAQ moustiquaire Chambéry</p>
          <h2>Les questions fréquentes</h2>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {f.question}
                  <span className={`faq-icon ${openFaq === i ? "open" : ""}`}>+</span>
                </button>
                {openFaq === i && <p className="faq-answer">{f.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <div>
          <h2>Votre moustiquaire sur mesure à Chambéry commence ici</h2>
          <p>
            Devis gratuit, prise de mesures à domicile, pose par nos techniciens.
            Contactez le showroom Caséo Chambéry ou faites votre demande en ligne.
          </p>
        </div>
        <div className="cta-buttons">
          <a href={devisUrl} className="btn-white">
            Demander un devis
          </a>
          <a href="tel:+33479344852" className="btn-ghost">
            Appeler le showroom
          </a>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-ghost">
            Itinéraire magasin
          </a>
        </div>
      </div>

      <footer>
        <div className="footer-inner">
          <span>© 2026 Caséo Chambéry — Menuiserie Diffusion</span>
          <div className="footer-links">
            <a href={showroomUrl} target="_blank" rel="noreferrer">
              Page showroom Caséo Chambéry
            </a>
            <a href={devisUrl} target="_blank" rel="noreferrer">
              Demande de devis Caséo
            </a>
            <a href="https://www.caseo-maison.com/" target="_blank" rel="noreferrer">
              Site officiel Caséo
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
