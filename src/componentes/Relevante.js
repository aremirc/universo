import '../estilos/Relevante.css';

function Relevante(props) {
  return (
    <div className='relevante'>
      <div className='relevante__pagina'>
        <div className='relevante__enlace'>
          <a className='relevante__link' href={props.link} target='__blank'>
            Visitar página
          </a>
        </div>
        <div className='relevante__boxImagen' style={{ backgroundImage: `url(${props.imagen})` }}>
          <h2 className='relevante__titulo'>{props.titulo}</h2>
          {/* <img className='relevante__imagen' src={props.imagen} alt={props.textoImagen} /> */}
        </div>
      </div>
      <div className='relevante__textos'>
        <p className='relevante__descripcion'>{props.descripcion}</p>
      </div>
    </div>
  )
}

export default Relevante;