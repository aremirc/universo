import '../estilos/Menu.css';

function Menu(props) {
  return (
    <div className="menu">
      <a className="menu__link" href={props.link}>
        {props.nombre}
      </a>
    </div>
  )
}

export default Menu;