import Modal from 'react-modal'
import { Form, RadioBox, TransactionTypeContainer } from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useContext, useState } from 'react'
import { useInput } from '../../utils/useInput'
import { TransactionType } from '../../types'
import { TransactionsContext } from '../../context/TransactionsContext'

Modal.setAppElement('#root')

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext)

  const [type, setType] = useState<TransactionType>('deposit')

  const titleInput = useInput('')
  const amountInput = useInput(0)
  const categoryInput = useInput('')

  function handleCreateNewTransaction(event: React.FormEvent) {
    event.preventDefault()

    createTransaction({
      title: titleInput.value,
      category: categoryInput.value,
      amount: amountInput.value,
      type,
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Form onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" {...titleInput} />
        <input type="number" placeholder="Valor" {...amountInput} />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            $isActive={type === 'deposit'}
            $activeColor="green"
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            $isActive={type === 'withdraw'}
            $activeColor="red"
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoría" {...categoryInput} />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  )
}
