import './CatalogoPage.css'
import cabana from '../Imagens/cabana.jpg'

import NavBar from '../Components/NavBar';
import filmesService from '../Services/FilmesService';

function CatalogoPage() {

    const filme = filmesService.getRandomFilme();

    const filmeList = filmesService.getAll();


    return (
        <div className='paicatalogo'>
            <div className='navbar'>
                <NavBar />
            </div>

            <div className='containers-catalogo'>

                {
                    filmeList.map((filme, idx) => 
                        <div className='container' key={idx}>
                            <h3>{filme.titulo}</h3>
                            <div className='img-container'>
                                <img src={filme.fotoThumbnail} className='foto' alt={filme.titulo} />
                            </div>
                            <div className='introducao'>
                                {filme.sinopse}
                            </div>
                            <div className='diretor-escritor'>
                                <div className='diretor'> {filme.elenco}</div>
                                <div className='escritor'> {filme.genero}</div>
                            </div>
                        </div>
                    )
                }
            </div>
            
        </div>
    )
}

export default CatalogoPage;
