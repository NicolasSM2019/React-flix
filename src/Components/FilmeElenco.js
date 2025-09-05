import "./FilmeElenco.css"

function FilmeElenco({filme}){
    return(
        <div className="atores">
            <h3 className="titulo-elenco">Elenco:</h3>
            {
                filme.elenco.map((ator, idx) => 
                    <div className="ator" key={idx}>{ator}</div>
                )
            }
        </div>
    )
} 

export default FilmeElenco;
