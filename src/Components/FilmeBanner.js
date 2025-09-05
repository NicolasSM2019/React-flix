import './FilmeBanner.css'

function FilmeBanner ({filme}){

    return(
        <div className='Banner'>
            <img src={filme.fotoThumbnail} className="BannerImg"/>
        </div>

    )

}

export default FilmeBanner