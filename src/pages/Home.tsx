import { Link } from "react-router-dom";
import PhotoCard from "../components/PhotoCard";
import Reveal from "../components/Reveal";
import { categories } from "../Data/products";
import { images } from "../assets";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../utils/constants";

const hero = [
  { src: images["po"], alt: "Pó facial translúcido" },
  { src: images["mousse"], alt: "Mousse facial" },
  { src: images["kit-rosa"], alt: "Kit cuidado íntimo rosa mosqueta" },
  { src: images["micelar"], alt: "Água micelar rosa mosqueta" },
  { src: images["batom"], alt: "Batom Astro Lips" },
];
const insta = [images["po"], images["kit-vanilla"], images["batom"], images["micelar"], images["kit-rosa"], images["mousse"]];

export default function Home() {
  return (
    <main>
      <section id="inicio" className="hero">
        <h1>Sua beleza<br />do <span>seu jeito</span></h1>
        <div className="sub">a beleza começa aqui</div>
        <div className="gal">
          {hero.map((h) => <PhotoCard key={h.alt} {...h} />)}
        </div>
        <Link className="cta" to="/#categorias">Ver categorias</Link>
      </section>

      <Reveal className="about">
        <PhotoCard src={images["logo"]} alt="Logo Rotiinayestilos" />
        <div>
          <h2>Toda mulher merece <span>se cuidar</span></h2>
          <p>Maquiagem, skincare e cuidados do dia a dia escolhidos com carinho, para você se sentir bem em cada momento da sua rotina.</p>
          <a className="cta" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Siga @{INSTAGRAM_HANDLE}</a>
        </div>
      </Reveal>

      <section id="categorias" className="wrap">
        <Reveal><h2 className="title">Nossas categorias</h2><p className="lead">Escolha uma categoria para ver os produtos.</p></Reveal>
        <Reveal className="grid">
          {categories.map((c) => (
            <Link key={c.slug} to={`/${c.slug}`} className="cc">
              <PhotoCard src={c.cover} alt={c.title}>
                <div className="txt"><h3>{c.title}</h3><small>{c.subtitle}</small></div>
              </PhotoCard>
            </Link>
          ))}
        </Reveal>
      </section>

      <section id="instagram" className="wrap">
        <Reveal>
          <h2 className="title">Nos acompanhe no Instagram</h2>
          <div className="insta">
            {insta.map((src, i) => (
              <a key={i} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><PhotoCard src={src} alt="" /></a>
            ))}
          </div>
          <a className="handle" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@{INSTAGRAM_HANDLE}</a>
        </Reveal>
      </section>
    </main>
  );
}
