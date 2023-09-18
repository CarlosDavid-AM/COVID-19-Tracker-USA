import axios from "axios"
import { useEffect, useState } from "react"


function App() {

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
            <div className="pl-20">
              fgg
            </div>
          </div>
          <div className="w-full">
            {
              covid.map(({states, dateChecked, positive, negative, hash}) => (
                <div key={hash} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="py-2 px-4 text-left">Fecha</th>
                        <th className="py-2 px-4">Estados</th>
                        <th className="py-2 px-4">Positivos</th>
                        <th className="py-2 px-4">Negativos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td  className="py-2 px-4 align-middle text-left">{dateChecked}</td>
                        <td  className="py-2 px-4 align-middle text-center">{states}</td>
                        <td  className="py-2 px-4 align-middle text-center">{positive}</td>
                        <td  className="py-2 px-4 align-middle text-center">{negative}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))
            }
          </div>
        </div>
  </div>
  )
}

export default App
