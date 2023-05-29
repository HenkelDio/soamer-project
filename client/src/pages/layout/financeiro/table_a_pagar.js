export default function TableAReceber() {
  return (
    <table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Descrição</th>
          <th>Forma</th>
          <th>Parcela</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12/04/2023</td>
          <td>Venda de material</td>
          <td>Cartão de Crédito</td>
          <td>5x</td>
          <td className="valuePositive">+ R$5.500,00</td>
        </tr>
      </tbody>
    </table>
  )
}