import '../estilos/Logo.css';

function Logo({ logo, width, link }) {
  return (
    <div className='logo' style={{ width: width }}>
      <a className='logo__link' href={link}>
        <img className='logo__img' src={logo ? logo : '/imagenes/LogoFOGON.svg'} alt='Logo' />
      </a>
    </div>
  )
}

export default Logo;