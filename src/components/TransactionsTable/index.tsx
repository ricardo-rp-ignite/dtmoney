import { Container } from './styles'

export function TransactionsTable(): React.ReactElement {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoría</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="income">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2020</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="expenditure">- R$1.100</td>
            <td>Casa</td>
            <td>30/02/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
