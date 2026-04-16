import Head from "next/head";
import { useState } from "react";

const canonicalUrl = "https://moustiquaire-chambery-caseo.vercel.app/";
const showroomUrl =
  "https://www.caseo-maison.com/magasins/page/caseo-chambery-voglans-85/magasin-fenetre-chambery-caseo-71";
const devisUrl = "https://www.caseo-maison.com/devis";
const mapsUrl = "https://maps.app.goo.gl/hsRmYYPDsB5QcNK98";
const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775923.340662299!2d1.4331651417110982!3d47.19970105736059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba7f4992eba1f%3A0x9ea3fb9aab31d495!2zQ0FTw4lPIENoYW1iw6lyeQ!5e0!3m2!1sfr!2sfr!4v1776328547399!5m2!1sfr!2sfr";
const reviewsUrl =
  "https://www.caseo-maison.com/avis-clients/magasins/avis-caseo-chambery-85";

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
    ideal: "Idéale pour les fenêtres de chambre, cuisine et salle de bain",
  },
  {
    num: "02",
    title: "Moustiquaire plissée",
    desc: "Un accordéon de fibre ultra-fine qui glisse sans effort sur des rails. Elle s'ouvre sur toute la largeur, sans obstruer la vue ni l'entrée d'air.",
    ideal: "Idéale pour les portes-fenêtres et les baies coulissantes",
  },
  {
    num: "03",
    title: "Moustiquaire fixe",
    desc: "Montée une fois, elle protège en permanence sans manipulation. Légère, robuste, presque invisible grâce à sa toile fine.",
    ideal: "Idéale pour les ouvertures peu sollicitées, caves et vérandas",
  },
];

const reasons = [
  {
    number: "01",
    title: "Showroom à Chambéry",
    text: "Venez découvrir nos moustiquaires au showroom de Chambéry. L'équipe vous accueille et vous oriente vers la solution la plus adaptée.",
  },
  {
    number: "02",
    title: "Fabriqué sur vos cotes",
    text: "Chaque moustiquaire est fabriquée à partir de vos dimensions exactes pour un rendu net, précis et durable.",
  },
  {
    number: "03",
    title: "Pose par nos techniciens",
    text: "Nos techniciens prennent les mesures sur place et assurent l'installation de votre moustiquaire.",
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

const reviews = [
  {
    name: "karine routin",
    rating: "5/5",
    date: "4 novembre 2025",
    text: "Très professionnel",
  },
  {
    name: "PATRICIA RENAUD",
    rating: "5/5",
    date: "6 juin 2025",
    text: "Je suis tout à fait satisfaite. Jean-Claude a été efficace, fiable et très agréable.",
  },
  {
    name: "Verdoia Jean Daniel",
    rating: "5/5",
    date: "20 février 2024",
    text: "Très bon rapport qualité prix, le service est excellent et les matériaux de bonne qualités. Je recommande les yeux fermés car je suis satisfait du résultat.",
  },
];

const faqs = [
  {
    question: "Quel type de moustiquaire choisir pour ma fenêtre ?",
    answer:
      "Pour une fenêtre standard, la moustiquaire enroulable est souvent le meilleur choix. Pour une porte-fenêtre ou une baie vitrée, la moustiquaire plissée est généralement plus confortable.",
  },
  {
    question: "Faut-il obligatoirement une moustiquaire sur mesure ?",
    answer:
      "Pour une baie vitrée ou une porte-fenêtre, oui. Le sur-mesure permet une ouverture fluide, une bonne tenue dans le temps et une finition bien plus propre.",
  },
  {
    question: "Comment se passe la prise de mesures ?",
    answer:
      "Vous pouvez demander un devis en ligne ou appeler directement le showroom Caséo Chambéry. Un technicien peut ensuite intervenir pour mesurer précisément vos ouvertures avant fabrication.",
  },
  {
    question: "Caséo Chambéry intervient-il autour de Chambéry ?",
    answer:
      "Oui. Nous intervenons à Chambéry et dans les communes environnantes comme Voglans, La Motte-Servolex, Cognin, Bassens, Barberaz, Aix-les-Bains et Le Bourget-du-Lac.",
  },
  {
    question: "Quels sont les horaires du showroom Caséo Chambéry ?",
    answer:
      "Le showroom est ouvert du lundi au vendredi de 08h00 à 12h00 puis de 13h30 à 18h00, et le samedi de 09h00 à 13h00.",
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
  sameAs: [showroomUrl, mapsUrl, reviewsUrl],
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

      <header className="site-header">
        <div className="container header-inner">
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
            <a href={devisUrl} className="btn btn-primary nav-cta">
              Demander un devis
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-tag">Caséo Chambéry — Voglans</div>
              <h1>
                Moustiquaires <span>sur mesure</span> à Chambéry
              </h1>
              <p className="hero-text">
                Fenêtres, portes-fenêtres, baies vitrées : protégez vos pièces
                des insectes tout l'été sans renoncer à l'air frais. L'équipe
                Caséo Chambéry mesure, fabrique et pose votre moustiquaire.
              </p>

              <div className="hero-actions">
                <a href={devisUrl} className="btn btn-primary">
                  Demander un devis gratuit
                </a>
                <a href="tel:+33479344852" className="btn btn-secondary">
                  Appeler le showroom
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
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
                  <span>showroom Chambéry</span>
                </div>
                <div className="stat-card">
                  <strong>Pose</strong>
                  <span>par nos techniciens</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-label">Showroom Caséo Chambéry</div>
              <div className="hero-panel-title">Votre projet commence ici</div>
              <p className="hero-panel-text">
                Venez découvrir nos moustiquaires au showroom de Chambéry.
                L'équipe vous guide vers la solution la mieux adaptée à votre
                logement et à vos ouvertures.
              </p>

              <div className="hero-panel-box">
                <p>
                  <strong>Menuiserie Diffusion</strong>
                  <br />
                  381 Avenue de Villarcher
                  <br />
                  73000 Chambéry
                </p>
                <a href="tel:+33479344852">04 79 34 48 52</a>
              </div>

              <div className="hero-panel-actions">
                <a href={devisUrl} className="btn btn-primary">
                  Devis en ligne
                </a>
                <a
                  href={showroomUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark-outline"
                >
                  Page magasin
                </a>
              </div>

              <div className="zone-pills">
                {zones.map((z) => (
                  <span key={z}>{z}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="trust-bar">
          <div className="container trust-grid">
            <div className="trust-item">
              <div className="trust-number">01</div>
              <div>
                <strong>Prise de mesures à domicile</strong>
                <span>Nos techniciens se déplacent chez vous</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-number">02</div>
              <div>
                <strong>Fabrication sur vos cotes</strong>
                <span>Chaque moustiquaire est unique</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-number">03</div>
              <div>
                <strong>Installation professionnelle</strong>
                <span>Posée proprement, durable dans le temps</span>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="section">
          <div className="container">
            <p className="section-tag">Moustiquaire Chambéry</p>
            <h2>Des solutions adaptées à chaque ouverture</h2>
            <p className="section-text">
              Fenêtre de chambre, porte-fenêtre de terrasse ou grande baie
              vitrée : nous avons la moustiquaire faite pour vous.
            </p>

            <div className="solutions-grid">
              {solutions.map((s) => (
                <article key={s.num} className="solution-card">
                  <div className="solution-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span>{s.ideal}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pourquoi" className="section section-soft">
          <div className="container why-grid">
            <div>
              <p className="section-tag">Pourquoi choisir Caséo Chambéry</p>
              <h2>Un showroom local, une équipe qui se déplace</h2>
              <p className="section-text why-text">
                Vous n'achetez pas une moustiquaire générique. Vous faites
                confiance à une équipe locale qui connaît votre secteur, vos
                maisons et vos contraintes d'ouverture.
              </p>

              <div className="why-feature">
                <div className="why-feature-label">Showroom ouvert à Chambéry</div>
                <div className="why-feature-title">
                  Venez voir et comparer avant de choisir
                </div>
                <p>
                  Au showroom Caséo Chambéry, vous pouvez voir les modèles,
                  comprendre les différences et repartir vers un devis adapté à
                  votre projet.
                </p>
              </div>
            </div>

            <div className="reasons-grid">
              {reasons.map((r) => (
                <article key={r.title} className="reason-card">
                  <div className="reason-number">{r.number}</div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-tag">Comment ça se passe</p>
            <h2>De la prise de contact à la pose, on s'occupe de tout</h2>

            <div className="process-grid">
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
                <article key={s.n} className="process-step">
                  <div className="process-circle">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="local" className="section">
          <div className="container">
            <p className="section-tag">Magasin & horaires</p>
            <h2>Retrouvez Caséo Chambéry au showroom</h2>
            <p className="section-text">
              Tous les accès utiles sont ici : devis, téléphone, carte du
              magasin et horaires du showroom.
            </p>

            <div className="local-grid">
              <div className="map-card">
                <iframe
                  src={mapsEmbedUrl}
                  className="map-frame"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Caséo Chambéry"
                />
                <div className="map-actions">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Voir l'itinéraire
                  </a>
                  <a
                    href={showroomUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    Voir la page magasin
                  </a>
                  <a href={devisUrl} className="btn btn-secondary">
                    Faire une demande de devis
                  </a>
                </div>
              </div>

              <div className="hours-card">
                <div className="hours-head">
                  <p className="section-tag small-tag">Horaires showroom</p>
                  <h3>Caséo Chambéry</h3>
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

                <div className="hours-actions">
                  <a href="tel:+33479344852" className="btn btn-dark">
                    Appeler le 04 79 34 48 52
                  </a>
                  <a href={devisUrl} className="btn btn-primary">
                    Demander un devis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-reviews">
          <div className="container">
            <p className="section-tag">Avis clients</p>
            <h2>Des avis réels visibles en ligne</h2>
            <p className="section-text">
              Voici quelques retours publics du showroom Caséo Chambéry.
            </p>

            <div className="reviews-header">
              <div className="reviews-badge">
                <strong>33 avis</strong>
                <span>Caséo Chambéry</span>
              </div>
              <a
                href={reviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Voir tous les avis
              </a>
            </div>

            <div className="reviews-grid">
              {reviews.map((review) => (
                <article
                  key={`${review.name}-${review.date}`}
                  className="review-card"
                >
                  <div className="review-top">
                    <strong>{review.name}</strong>
                    <span>{review.rating}</span>
                  </div>
                  <p className="review-date">{review.date}</p>
                  <p className="review-text">“{review.text}”</p>
                  <a
                    href={reviewsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="review-link"
                  >
                    Consulter la source
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="zones" className="section section-dark">
          <div className="container">
            <p className="section-tag dark-tag">Zones desservies</p>
            <h2>Chambéry et ses environs</h2>
            <p className="section-text dark-text">
              Nous intervenons pour la pose de moustiquaires sur mesure à
              Chambéry et dans les communes alentour du bassin chambérien.
            </p>

            <div className="zones-grid">
              {zones.map((z, i) => (
                <span key={z} className={i === 0 ? "zone-main" : ""}>
                  {z}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section">
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
                    <span
                      className={openFaq === i ? "faq-plus open" : "faq-plus"}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && <p className="faq-answer">{f.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-wrap">
          <div className="cta-box">
            <div>
              <h2>Votre moustiquaire sur mesure à Chambéry commence ici</h2>
              <p>
                Devis gratuit, prise de mesures à domicile, pose par nos
                techniciens. Contactez le showroom Caséo Chambéry ou faites
                votre demande en ligne.
              </p>
            </div>

            <div className="cta-buttons">
              <a href={devisUrl} className="btn btn-white">
                Demander un devis
              </a>
              <a href="tel:+33479344852" className="btn btn-dark-outline">
                Appeler le showroom
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark-outline"
              >
                Itinéraire magasin
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 Caséo Chambéry — Menuiserie Diffusion</span>
          <div className="footer-links">
            <a href={showroomUrl} target="_blank" rel="noreferrer">
              Page showroom Caséo Chambéry
            </a>
            <a href={devisUrl} target="_blank" rel="noreferrer">
              Demande de devis Caséo
            </a>
            <a
              href="https://www.caseo-maison.com/"
              target="_blank"
              rel="noreferrer"
            >
              Site officiel Caséo
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
