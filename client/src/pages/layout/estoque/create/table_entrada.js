export default function TableEntrada({ entryDataType }){

  if(entryDataType.length === 0) {
    return <b>Nenhum dado encontrado...</b>
  } 
   
  return(
    <table>
    <thead>
      <tr>
        <th>Data</th>
        <th>Tipo</th>
        <th>Item</th>
        <th>Quantidade</th>
      </tr>
    </thead>
    <tbody>
      {
        entryDataType.map((item) => {
          return <tr>
          <td>{item.data.data}</td>
          <td>{item.data.type}</td>
          <td className="item">{item.data.item}</td>
          <td>{item.data.amount}</td>
        </tr>
        })
      }
    </tbody>
  </table>
  )
}