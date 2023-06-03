import Fotos from "./Fotos"
import './MyFamili.css';

export default function MyFamili(){
    return (
        <ul className="estilos-componente-myFamili">
           <Fotos id="1" nombre="Harotdy" imagen="bebe.jpg" />
           <Fotos id="2" nombre="Family" imagen="famili.jpg" />
           <Fotos id="3" nombre="Family1" imagen="famili1.jpg" />
           <Fotos id="4" nombre="Family2" imagen="famili2.jpg" />
           <Fotos id="5" nombre="Family3" imagen="famili3.jpg" />
           <Fotos id="6" nombre="Cobre" imagen="famili-cobre.jpg" />
           <Fotos id="7" nombre="Niños" imagen="niños.jpg" />
           <Fotos id="8" nombre="Hotel Santiago" imagen="niños-hotelSantiago.jpg" />
           <Fotos id="9" nombre="Familia Papa" imagen="papaAlex.jpg" />
           <Fotos id="10" nombre="Con Papa Pablo" imagen="papaPablo.jpg" />
           <Fotos id="11" nombre="Con Mama Yaumara" imagen="yau.jpg" />
           <Fotos id="12" nombre="La Hermanita Vampira" imagen="vampira.jpg" />
 
        </ul>
    )
}