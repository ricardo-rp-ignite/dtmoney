import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactionsContext } from '../../context/TransactionsContext'

import { Container } from './styles'

export function Summary(): React.ReactElement {
  const { transactions } = useTransactionsContext()

  const summary = transactions.reduce(
    ({ deposits, withdrawals, total }, { type, amount }) => {
      if (type === 'deposit') {
        deposits += amount
        total += amount
      } else {
        withdrawals += amount
        total -= amount
      }

      return { deposits, withdrawals, total }
    },
    { deposits: 0, withdrawals: 0, total: 0 }
  )

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Despesas" />
        </header>
        <strong>
          {'-' +
            Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(summary.withdrawals)}
        </strong>
      </div>

      <div className="green-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}
