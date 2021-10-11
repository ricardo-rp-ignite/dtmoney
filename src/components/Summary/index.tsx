import incomeImg from '../../assets/income.svg'
import expenditureImg from '../../assets/expenditure.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles'

export function Summary(): React.ReactElement {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={expenditureImg} alt="Despesas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="green-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}
