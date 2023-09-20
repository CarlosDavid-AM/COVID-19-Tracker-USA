import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Tabla from "./component/Tabla"


const App = () => {

  const [covid, setCovid] = useState([])

  const API_URL = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    axios.get(API_URL)
    .then(dato => {
      console.log(dato.data)
      setCovid(dato.data)
    })
  }, [])

  return (
    <div>
        <div className="bg-blue-500 p-4 text-white">
            <h1 className="text-2xl font-bold">
                ¡Bienvenido a COVID-19 Tracker USA!
            </h1>
            <p className="mt-2">
                Te damos la bienvenida a esta herramienta que te proporciona información sobre la situación pasada del COVID-19 en Estados Unidos 
                hasta el 7 de marzo de 2021, basada en datos confiables. Aunque no se actualicen datos recientes, 
                este proyecto sigue siendo una fuente valiosa de referencia y un ejemplo de mi trabajo en el desarrollo web. 
                Recuerda la importancia de mantener la precaución y seguir las pautas de seguridad en tiempos de pandemia. 
                ¡Gracias por visitarme!
            </p>
        </div>

        <div className="flex">
          <div className="w-1/2  border border-black">
            <div className="pl-16 pt-20">
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/hospitalizados">Hospitalizados</Link></li>
                <li><Link to="/fallecidos">Fallecidos</Link></li>
                <li><Link to="/vacunados">Vacunados</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            {
              covid.map(({states, dateChecked, positive, negative, hash}) => (
                <Tabla hash={hash} fila1="Fecha" fila2="Estados" fila3="Positivos" fila4="Negativos"
                col1={dateChecked} col2={states} col3={positive} col4={negative} />
              ))
            }
          </div>
        </div>
  </div>
  )
}

export default App
