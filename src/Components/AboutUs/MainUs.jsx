import cangurajeLaCiba from "../../Assets/Img/cangurajeLaCiba.jpg"
function MainUS() {
    return (
        <>
        <div className="flex justify-around items-center">
            <img className="w-1/2 p-4" src={cangurajeLaCiba} alt="Espacio de Canguraje" />
            <p className="w-1/2 p-4 font-roboto">
                <span className="font-bebas text-violeta-ciba text-2xl">Menuda Ciba  </span>
                es un espacio de cuidado y canguraje municipal, abierto a todas 
                las niñas y niños, entre los 0 y 13 años. Tiene por objetivo que estos niños 
                puedan disfrutar de un tiempo de ocio de calidad, con actividades pedagógicas 
                adaptadas a las diferentes edades, basadas en los valores de la coeducación y 
                que permita la conciliación de la vida laboral, familiar y personal 
                particularmente de las familias monomarentales, de mujeres en situación de 
                violencia machista, o en situación de paro de larga duración, también quiere 
                ofrecer un espacio de apoyo a las mujeres en su proceso de formación, 
                inserción laboral o participación ciudadana, también tiene la voluntad de 
                facilitar un tiempo personal de respiro a las mujeres y familias que no 
                disponen de una red familiar o comunitaria de apoyo. Este servicio de 
                canguraje se prestará de forma fija en el espacio infantil de La CIBA, 
                espacio de recursos para mujeres, innovación y economía feminista.
            </p>
        </div>
        </>

    )
}
export default MainUS;

 /*        <div className="w-auto flex">
            <img className='w-auto h-96 rounded-lg mt-10 mr-25 ml-10' src={cangurajeLaCiba} alt="img-ciba" />
            <div className="w-auto justify-center  flex flex-wrap space-y ">
                <h1 className="flex justify-center text-5xl"> </h1>
                <div className="flex h-2/3 text-xl content-center">
                    <p className="mx-10">"MenudaCiba" és un espai de cura i canguratge municipal, obert a totes les nenes i nens, entre els 0 i 13 anys. Té per objectiu que aquests infants puguin gaudir d’un temps de lleure de qualitat, amb activitats pedagògiques adaptades a les diferents edats, basades en els valors de la coeducació i que permeti la conciliació de la vida laboral, familiar i personal particularment de les famílies monomarentals, de dones en situació de violència masclista, o en situació d’atur de llarga durada, també vol oferir un espai de suport a les dones en el seu procés de formació, d’inserció laboral o de participació ciutadana, també té la voluntat de facilitar un temps personal de respir a les dones i a les famílies que no disposen d’una xarxa familiar o comunitària de suport. Aquest servi de canguratge es prestarà de manera fixa a l’espai infantil de La CIBA, espai de recursos per a dones, innovació i economia feminista. Aquest servei s’oferirà tant en horari de matí com de tarda. 
                    </p>
                </div>
            </div>
        </div> */