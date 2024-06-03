import '../estilos/Icono.css';

function Icono(props) {
  return (
    <span className='icono__envoltura'>
      <a className='icono__logo' href={props.link}>
        {props.svg}
      </a>
    </span>
  )
}

export default Icono;