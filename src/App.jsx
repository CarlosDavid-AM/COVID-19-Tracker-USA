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
        <div class="bg-blue-500 p-4 text-white">
            <h1 class="text-2xl font-bold">
                ¡Bienvenido a COVID-19 Tracker USA!
            </h1>
            <p class="mt-2">
                Te damos la bienvenida a esta herramienta que te proporciona información sobre la situación pasada del COVID-19 en Estados Unidos 
                hasta el 7 de marzo de 2021, basada en datos confiables. Aunque no se actualicen datos recientes, 
                este proyecto sigue siendo una fuente valiosa de referencia y un ejemplo de mi trabajo en el desarrollo web. 
                Recuerda la importancia de mantener la precaución y seguir las pautas de seguridad en tiempos de pandemia. 
                ¡Gracias por visitarme!
            </p>
        </div>

        <div>
          {
            covid.map(({date, dateChecked, hash}) => (
              <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-gray-200">
                    <tr>
                      <th class="py-2 px-4 text-left">Fecha</th>
                      <th class="py-2 px-4">Estados</th>
                      <th class="py-2 px-4">Positivos</th>
                      <th class="py-2 px-4">Negativos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="py-2 px-4">20210307</td>
                      <td class="py-2 px-4">56</td>
                      <td class="py-2 px-4">28,756,489</td>
                      <td class="py-2 px-4">74,582,825</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            ))
          }
        </div>
  </div>
  )
}

export default App
