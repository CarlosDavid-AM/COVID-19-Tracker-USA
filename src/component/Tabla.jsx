const Tabla = ({hash, fila1, fila2, fila3, fila4, col1, col2, col3, col4}) => {
  return(
    <div key={hash} className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left">{fila1}</th>
            <th className="py-2 px-4">{fila2}</th>
            <th className="py-2 px-4">{fila3}</th>
            <th className="py-2 px-4">{fila4}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td  className="py-2 px-4 align-middle text-left">{col1}</td>
            <td  className="py-2 px-4 align-middle text-center">{col2}</td>
            <td  className="py-2 px-4 align-middle text-center">{col3}</td>
            <td  className="py-2 px-4 align-middle text-center">{col4}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tabla