import { Link, Navigate, useParams } from "react-router-dom";
import PhotoCard from "../components/PhotoCard";
import { categories } from "../Data/products";

export default function Category() {
  const { slug } = useParams();
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return <Navigate to="/" replace />;

  return (
    <main className="catpage">
      <Link className="back" to="/#categorias">← Voltar</Link>
      <h1 className="title left">{cat.title}</h1>
      <p className="desc">{cat.description}</p>
      <div className="grid products">
        {cat.products.map((p) => (
          <article key={p.id} className="prod">
            <PhotoCard src={p.image} alt={p.name} />
            <div className="cap">
              <h3>{p.name}</h3>
              <small>{p.description}</small>
              {p.price && <b>{p.price}</b>}
            </div>
          </article>
        ))}
      </div>
      <div className="others">
        {categories.filter((c) => c.slug !== cat.slug).map((c) => <Link key={c.slug} to={`/${c.slug}`}>{c.title}</Link>)}
      </div>
    </main>
  );
}
