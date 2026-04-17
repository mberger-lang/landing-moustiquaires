import Head from "next/head";
import { useState } from "react";

const canonicalUrl = "https://moustiquaire-chambery-caseo.vercel.app/";
const ogImage = `${canonicalUrl}images/showroom-caseo-chambery.svg`;
const showroomUrl =
  "https://www.caseo-maison.com/magasins/page/caseo-chambery-voglans-85/magasin-fenetre-chambery-caseo-71";
const logoImage = "/images/logo-caseo.svg";
const showroomImage = "/images/showroom-caseo-chambery.svg";
const magasinImage = "/images/magasin-caseo-chambery.svg";
const fenetreImage = "/images/moustiquaire-magasin-fenetre.svg";
const baieImage = "/images/moustiquaire-magasin-baie-vitree.svg";
const devisUrl = "https://www.caseo-maison.com/devis";
const mapsUrl = "https://maps.app.goo.gl/hsRmYYPDsB5QcNK98";
const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775923.340662299!2d1.4331651417110982!3d47.19970105736059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba7f4992eba1f%3A0x9ea3fb9aab31d495!2zQ0FTw4lPIENoYW1iw6lyeQ!5e0!3m2!1sfr!2sfr!4v1776328547399!5m2!1sfr!2sfr";
const phoneDisplay = "04 79 34 48 52";
const phoneLink = "tel:+33479344852";

const openingHours = [
  ["Lundi", "08h00-12h00 / 13h30-18h00"],
  ["Mardi", "08h00-12h00 / 13h30-18h00"],
  ["Mercredi", "08h00-12h00 / 13h30-18h00"],
  ["Jeudi", "08h00-12h00 / 13h30-18h00"],
  ["Vendredi", "08h00-12h00 / 13h30-18h00"],
  ["Samedi", "09h00-13h00"],
  ["Dimanche", "Fermé"],
];

const zones = ["Chambéry", "La Motte-Servolex", "Bassens", "Cognin", "Barberaz", "Aix-les-Bains", "Le Bourget-du-Lac", "Voglans"];

const solutions = [
  ["Moustiquaire enroulable", "La solution la plus demandée pour les fenêtres.", fenetreImage],
  ["Moustiquaire plissée", "Parfaite pour les portes-fenêtres et baies vitrées.", baieImage],
  ["Moustiquaire fixe", "Simple, discrète et durable pour les ouvertures peu sollicitées.", ""],
];

const reviews = [
  ["Thomas Jacquignon", "5/5", "Excellente expérience du début à la fin. Très bons conseils et installation impeccable."],
  ["Manon Malavasi", "5/5", "Super projet. Nous sommes ravis de notre nouvelle porte d'entrée. Équipe top."],
  ["Laurence Maranzoni", "5/5", "De l'accueil magasin jusqu'à la pose, tout était parfait. Merci beaucoup."],
];

const faqs = [
  ["Quel type de moustiquaire choisir ?", "Pour une fenêtre standard, l'enroulable est souvent le meilleur choix. Pour une porte-fenêtre ou une baie vitrée, la plissée est généralement la plus confortable à l'usage."],
  ["Proposez-vous la pose à Chambéry et autour ?", "Oui. Caséo Chambéry intervient pour la prise de mesures, la fabrication sur mesure et la pose de moustiquaires à Chambéry et dans les communes voisines."],
  ["Combien coûte une moustiquaire sur mesure ?", "Le prix dépend du type de moustiquaire, des dimensions et du nombre d'ouvertures. Le plus simple est de demander un devis gratuit."],
  ["Quels sont les horaires du showroom ?", "Le showroom est ouvert du lundi au vendredi de 08h00 à 12h00 puis de 13h30 à 18h00, et le samedi de 09h00 à 13h00."],
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Caséo Chambéry - Menuiserie Diffusion",
  image: ogImage,
  url: canonicalUrl,
  telephone: "+33479344852",
  address: { "@type": "PostalAddress", streetAddress: "381 Avenue de Villarcher", postalCode: "73000", addressLocality: "Chambéry", addressCountry: "FR" },
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Moustiquaire sur mesure à Chambéry avec pose | Caséo Chambéry</title>
        <meta name="description" content="Caséo Chambéry installe votre moustiquaire sur mesure à Chambéry : fenêtres, portes-fenêtres et baies vitrées. Devis gratuit et pose professionnelle." />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta property="og:title" content="Moustiquaire sur mesure à Chambéry avec pose | Caséo Chambéry" />
        <meta property="og:description" content="Demandez votre devis gratuit pour une moustiquaire sur mesure à Chambéry." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta name="theme-color" content="#1a2340" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </Head>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo"><img src={logoImage} alt="Logo Caséo Chambéry" className="logo-image" /></a>
          <nav className="nav">
            <a href="#solutions">Solutions</a>
            <a href="#avis">Avis</a>
            <a href="#magasin">Magasin</a>
            <a href="#faq">FAQ</a>
            <a href={devisUrl} className="btn btn-primary">Recevoir mon devis gratuit</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div>
              <div className="badges">
                <span className="badge badge-orange">Caséo Chambéry</span>
                <span className="badge badge-white">4,5/5 · 84 avis Google</span>
              </div>
              <h1>Moustiquaire sur mesure à Chambéry avec <span>pose</span></h1>
              <p className="lead">
                Fenêtres, portes-fenêtres, baies vitrées : protégez votre maison des moustiques tout l'été sans renoncer à l'air frais.
              </p>
              <ul className="ticks">
                <li>Prise de mesures à domicile</li>
                <li>Fabrication sur vos cotes</li>
                <li>Pose par nos techniciens</li>
              </ul>
              <div className="actions">
                <a href={devisUrl} className="btn btn-primary">Recevoir mon devis gratuit</a>
                <a href={phoneLink} className="btn btn-secondary">Appeler le showroom</a>
              </div>
            </div>

            <div className="hero-panel">
              <p className="overline">Votre showroom local</p>
              <h2>Un projet simple, clair et bien accompagné</h2>
              <p>Venez voir les modèles au showroom Caséo Chambéry ou faites directement votre demande en ligne pour être recontacté.</p>
              <div className="address-box">
                <strong>Menuiserie Diffusion</strong>
                <span>381 Avenue de Villarcher</span>
                <span>73000 Chambéry</span>
                <a href={phoneLink}>{phoneDisplay}</a>
              </div>
              <div className="actions">
                <a href={devisUrl} className="btn btn-primary">Demander un devis</a>
                <a href={mapsUrl} className="btn btn-outline-light" target="_blank" rel="noreferrer">Voir l'itinéraire</a>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery">
          <div className="container gallery-grid">
            <article className="gallery-card large">
              <img src={showroomImage} alt="Showroom Caséo Chambéry" />
              <div className="overlay"><span>Showroom</span><strong>Découvrez les modèles exposés</strong></div>
            </article>
            <article className="gallery-card">
              <img src={magasinImage} alt="Magasin Caséo Chambéry" />
              <div className="overlay"><span>Magasin</span><strong>Un accompagnement local</strong></div>
            </article>
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="container">
            <p className="eyebrow">Nos solutions</p>
            <h2>Des moustiquaires adaptées à chaque ouverture</h2>
            <div className="cards cards-3">
              {solutions.map(([title, text, image], index) => (
                <article className="card" key={title}>
                  <div className="card-media">{image ? <img src={image} alt={title} /> : <div className="placeholder">Protection discrète et durable</div>}</div>
                  <div className="card-body">
                    <div className="step">0{index + 1}</div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft" id="avis">
          <div className="container">
            <p className="eyebrow">Avis clients</p>
            <h2>Des retours visibles en ligne pour vous rassurer</h2>
            <div className="reviews-head">
              <div className="score-box"><strong>4,5/5 · 84 avis Google</strong><span>Caséo Chambéry</span></div>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">Voir les avis Google</a>
            </div>
            <div className="cards cards-3">
              {reviews.map(([name, rating, text]) => (
                <article className="review" key={name}>
                  <div className="review-top"><strong>{name}</strong><span>{rating}</span></div>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="container">
            <p className="eyebrow eyebrow-light">Zone d'intervention</p>
            <h2>Pose de moustiquaire à Chambéry et dans les environs</h2>
            <p className="dark-copy">Caséo Chambéry intervient à Chambéry, La Motte-Servolex, Bassens, Cognin, Barberaz, Aix-les-Bains, Le Bourget-du-Lac et Voglans.</p>
            <div className="zone-list">
              {zones.map((zone, index) => (
                <span key={zone} className={index === 0 ? "zone active" : "zone"}>{zone}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="magasin">
          <div className="container">
            <p className="eyebrow">Magasin & horaires</p>
            <h2>Retrouvez Caséo Chambéry au showroom</h2>
            <div className="local-shot">
              <img src={magasinImage} alt="Magasin Caséo Chambéry" />
              <div className="overlay"><span>Magasin Caséo Chambéry</span><strong>Découvrez le showroom et les modèles exposés</strong></div>
            </div>
            <div className="local-grid">
              <div className="map-card">
                <iframe src={mapsEmbedUrl} className="map-frame" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Carte Caséo Chambéry" />
                <div className="map-actions">
                  <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Voir l'itinéraire</a>
                  <a href={devisUrl} className="btn btn-secondary">Faire une demande de devis</a>
                </div>
              </div>
              <div className="hours-card">
                <p className="eyebrow">Horaires showroom</p>
                <h3>Caséo Chambéry</h3>
                <p className="address-text">Menuiserie Diffusion<br />381 Avenue de Villarcher<br />73000 Chambéry</p>
                <div className="hours-list">
                  {openingHours.map(([day, hours]) => (
                    <div className="hours-row" key={day}><strong>{day}</strong><span>{hours}</span></div>
                  ))}
                </div>
                <div className="hours-actions">
                  <a href={phoneLink} className="btn btn-dark">Appeler le {phoneDisplay}</a>
                  <a href={devisUrl} className="btn btn-primary">Recevoir mon devis gratuit</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <p className="eyebrow">FAQ moustiquaire Chambéry</p>
            <h2>Les questions fréquentes</h2>
            <div className="faq-list">
              {faqs.map(([q, a], index) => (
                <div className="faq-item" key={q}>
                  <button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                    {q}
                    <span className={openFaq === index ? "faq-plus open" : "faq-plus"}>+</span>
                  </button>
                  {openFaq === index && <p className="faq-answer">{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-wrap">
          <div className="cta-box">
            <div>
              <h2>Votre moustiquaire sur mesure à Chambéry commence ici</h2>
              <p>Devis gratuit, prise de mesures à domicile, fabrication sur mesure et pose par nos techniciens.</p>
            </div>
            <div className="cta-buttons">
              <a href={devisUrl} className="btn btn-white">Recevoir mon devis gratuit</a>
              <a href={phoneLink} className="btn btn-outline-light">Appeler le showroom</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer bottom">
        <div className="container footer-inner">
          <span>© 2026 Caséo Chambéry - Menuiserie Diffusion</span>
          <div className="footer-links">
            <a href={showroomUrl} target="_blank" rel="noreferrer">Page showroom Caséo Chambéry</a>
            <a href={devisUrl} target="_blank" rel="noreferrer">Demande de devis Caséo</a>
          </div>
        </div>
      </footer>
    </>
  );
}
