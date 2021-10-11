import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import { Container } from './styles'

export function Dashboard(): React.ReactElement {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}
