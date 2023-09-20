import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Tabla from "../component/Tabla"


const Vacunados = () => {

  const [covid, setCovid] = useState([])

  const API_URL = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    axios.get(API_URL)
    .then(dato => {
      console.log(dato.data)
      setCovid(dato.data)
    })
  }, [])

  return(
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
  )
}

export default Vacunados