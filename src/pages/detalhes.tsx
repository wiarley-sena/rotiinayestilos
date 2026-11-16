import  { categories } from "../Data/products";
import PhotoCard from "../components/PhotoCard";
import { useParams, Navigate, Link} from "react-router-dom";



export default function Detalhes() {

      const { id } = useParams();

    // Procura o produto pelo ID
    const produto = categories
        .flatMap((c) => c.products)
        .find((p) => p.id === id);

    // Caso não encontre o produto
    if (!produto) {
        return <Navigate to="/" replace />;
    }

    return(
        <main className="catpage">
             <Link to="/:slug" className="back">
                ← Voltar
            </Link>
            <h1 className="title left">Detalhes do Produto</h1>

            <section className= "detalhes-produto">
                <div className="produto">
                    <PhotoCard className="ph-unico" src={produto.image} alt={produto.name} />
                    <div className="cap">
                        <h3>{produto.name}</h3>
                        <p>{produto.description}</p>
                        {produto.price && (<b>R$ {produto.price}</b>)}
                    </div>
                    <div>
                        <a className="cta"
                        href={`https://api.whatsapp.com/send?phone=5585981006920&text=Olá,%20gostaria%20de%20comprar%20o%20produto%20${encodeURIComponent(produto.name || "")}%20no%20valor%20de%20${encodeURIComponent(produto.price || "")}.`} 
                        target="_blank" 
                        rel="noopener noreferrer">
                            Comprar
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}