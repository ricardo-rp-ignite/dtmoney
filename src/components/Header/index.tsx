import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

type Props = { openNewTransactionModal: () => void }

export function Header({ openNewTransactionModal }: Props): JSX.Element {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={openNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  )
}
