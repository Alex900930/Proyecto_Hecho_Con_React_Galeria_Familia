import './Fotos.css';

export default function Fotos(props) {
    return ( <li className="estilos-fotos">
                <img width={230} height={345} className='estilos-imagen' src={require(`./imagenes/imagen-${props.imagen}`)} 
                     alt="imagen-bebe"/>
                <br /> 
                {props.nombre}
                
            </li>
        )
}