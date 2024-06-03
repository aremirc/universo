import '../estilos/Paginas.css';
import Logo from './Logo';
import Menu from './Menu';
import Relevante from './Relevante';
import Icono from './Icono';
import Carousel from './Carousel';

function Paginas() {
  return (
    <div className='paginas'>
      <header className='paginas__header'>
        <Logo width={'7vw'} link={'/'} />
        <div className='paginas__nav'>
          <Menu link='' nombre='Inicio' />
          <Menu link='' nombre='Marcas' />
          <Menu link='' nombre='Contacto' />
        </div>
      </header>
      <div className='paginas__principal'>
        <div className='paginas__equipo'>
          <Carousel />
        </div>
        <div className='paginas__marcas'>
          <h2 className='paginas__marcasTitulo'>Nuestras Marcas</h2>
          <div className='paginas__relevante'>
            <Relevante imagen='https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=600' titulo='NATURALEZA' descripcion='Explica de manera clara y concisa qué problemas resuelves o qué beneficios ofreces a tus clientes. Destaca las principales proposiciones de valor de tu marca o empresa.' link='#' />
            <Relevante imagen='https://media.istockphoto.com/id/1350722246/es/foto/fondo-de-la-sala-de-servidores.jpg?s=612x612&w=0&k=20&c=hg-_dommkXg6oMsqaun0C-4CV9Ot1Yp9fckJic5hQ14=' titulo='CABLEADO ESTRUCTURADO Y SEGURIDAD ELECTRÓNICA' descripcion='Disfruta de un sistema de comunicación eficiente, redes seguras y confiables, integración de tecnologías avanzadas y soporte técnico especializado.' link='https://aremirc.github.io/project' />
            <Relevante imagen='https://media.istockphoto.com/id/1408439145/es/foto/concepto-de-cuidado-de-la-piel-y-maquillaje-oto%C3%B1al-con-productos-de-belleza-en-la-mesa.jpg?b=1&s=170667a&w=0&k=20&c=gbX8rxWhc9KGDVhLhUNBjAcm5ykvkdwLumSqjPCxAc0=' titulo='BELLEZA' descripcion='Utiliza una imagen atractiva y relevante que represente tu marca o el mensaje principal que deseas transmitir.' link='#' />
            <Relevante imagen='https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' titulo='RESTAURANT' descripcion='Utiliza una imagen atractiva y relevante que represente tu marca o el mensaje principal que deseas transmitir.' link='#' />
          </div>
        </div>
        <div className='paginas__info'>
          <div className='paginas__infoLogo'>
            <Logo width={'15vw'} />
          </div>
          <h4 className='paginas__infoTitulo'>¿Quiénes somos?</h4>
          <p className='paginas__infoDescrip'>Grupo Universo.</p>
          <div className='paginas__infoBox'>
            <div className='paginas__infoItem'>
              <img alt='' />
              <h5 className='paginas__infoTitulo'>Misión</h5>
              <p className='paginas__infoText'>Descripción de Perspectiva</p>
            </div>
            <div className='paginas__infoItem'>
              <img alt='' />
              <h5 className='paginas__infoTitulo'>Visión</h5>
              <p className='paginas__infoText'>Descripción de Perspectiva</p>
            </div>
            <div className='paginas__infoItem'>
              <img alt='' />
              <h5 className='paginas__infoTitulo'>Valores</h5>
              <p className='paginas__infoText'>Descripción de Perspectiva</p>
            </div>
          </div>
        </div>
        <div className='paginas__fraseBox'>
          <h3 className='paginas__frase'>"Un mundo de marcas, una sola pasión por la excelencia."</h3>
        </div>
      </div>
      <footer className='paginas__footer'>
        <div className='paginas__footerContent'>
          <Logo width={'10vw'} />
          <div className='paginas__footerOptions'>
            <h6 className='paginas__footerTitulo'>Conócenos</h6>
            <ul className='paginas__footerList'>
              <li className='paginas__footerItem'>Nuestro Equipo</li>
              <li className='paginas__footerItem'>Nuestras Marcas</li>
              <li className='paginas__footerItem'>Nuestra Perspectiva</li>
              <li className='paginas__footerItem'>Información Legal</li>
              <li className='paginas__footerItem'>Términos y Condiciones de Uso</li>
              <li className='paginas__footerItem'>Política de Privacidad</li>
            </ul>
          </div>
          <div className='paginas__extra'></div>
          <div className='paginas__cuenta'>
            <h6 className='paginas__footerTitulo'>Sesión</h6>
          </div>
        </div>
        <div className='paginas__socialMedia'>
          <Icono svg={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 15 15"><path d="M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z"></path></svg>} />
          <Icono svg={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 15 15"><path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"></path></svg>} />
          <Icono svg={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 15 15"><path d="M 2.296875 2 C 2.052875 2 1.9117344 2.2756094 2.0527344 2.4746094 L 6.4882812 8.7050781 L 2.0136719 14 L 3.3457031 14 L 7.09375 9.5527344 L 9.9609375 13.580078 C 10.148938 13.844078 10.452391 14 10.775391 14 L 13.703125 14 C 13.947125 14 14.088266 13.724391 13.947266 13.525391 L 9.2753906 6.9628906 L 13.457031 2 L 12.154297 2 L 8.6738281 6.1191406 L 6.0390625 2.4199219 C 5.8510625 2.1559219 5.5476094 2 5.2246094 2 L 2.296875 2 z M 3.6542969 3 L 5.2246094 3 L 12.345703 13 L 10.775391 13 L 3.6542969 3 z"></path></svg>} />
          <Icono svg={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 15 15"><path d="M 3.5 2 C 2.6774686 2 2 2.6774686 2 3.5 L 2 12.5 C 2 13.322531 2.6774686 14 3.5 14 L 12.5 14 C 13.322531 14 14 13.322531 14 12.5 L 14 3.5 C 14 2.6774686 13.322531 2 12.5 2 L 3.5 2 z M 3.5 3 L 12.5 3 C 12.781469 3 13 3.2185314 13 3.5 L 13 12.5 C 13 12.781469 12.781469 13 12.5 13 L 3.5 13 C 3.2185314 13 3 12.781469 3 12.5 L 3 3.5 C 3 3.2185314 3.2185314 3 3.5 3 z M 8 4 L 8 9.5 C 8 10.33 7.33 11 6.5 11 C 5.67 11 5 10.33 5 9.5 C 5 8.67 5.67 8 6.5 8 C 6.68 8 6.84 8.0298438 7 8.0898438 L 7 7.0507812 C 6.84 7.0207812 6.67 7 6.5 7 C 5.12 7 4 8.12 4 9.5 C 4 10.88 5.12 12 6.5 12 C 7.88 12 9 10.88 9 9.5 L 9 6.2109375 C 9.165316 6.3496799 9.2903403 6.5561561 9.4804688 6.6425781 C 10.313461 7.021211 11.25 7 12 7 L 12 6 C 11.25 6 10.436539 5.978789 9.8945312 5.7324219 C 9.3525237 5.4860548 9 5.1166667 9 4 L 8 4 z"></path></svg>} />
        </div>
        {/* <div className='App__creador'>
          Hecho con ❤️ por
          <a className='App__link' href=' '> AREMIRC </a>
          .
        </div> */}
        {/* <div className='App__info'></div> */}
      </footer>
    </div>
  )
}

export default Paginas;