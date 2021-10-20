import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')

export function App(): React.ReactElement {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] =
    useState(false)

  function openNewTransactionModal() {
    setisNewTransactionModalOpen(true)
  }

  function closeNewTransactionModal() {
    setisNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header openNewTransactionModal={openNewTransactionModal} />

      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  )
}
