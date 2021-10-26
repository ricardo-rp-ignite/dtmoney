import Modal from 'react-modal'
import { Form, RadioBox, TransactionTypeContainer } from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'
import { useInput } from '../../utils/useInput'
import { TransactionType } from '../../types'
import { useTransactionsContext } from '../../context/TransactionsContext'

Modal.setAppElement('#root')

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactionsContext()

  const [type, setType] = useState<TransactionType>('deposit')

  const [title, bindTitle, setTitle] = useInput('')
  const [amount, bindAmount, setAmount] = useInput(0)
  const [category, bindCategory, setCategory] = useInput('')

  async function handleCreateNewTransaction(event: React.FormEvent) {
    event.preventDefault()

    await createTransaction({ title, category, amount, type })

    onRequestClose()
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
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

        <input placeholder="Título" {...bindTitle} />
        <input type="number" placeholder="Valor" {...bindAmount} />

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

        <input placeholder="Categoría" {...bindCategory} />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  )
}
