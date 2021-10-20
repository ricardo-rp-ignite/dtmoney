import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'

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

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeNewTransactionModal}
      />

      <GlobalStyle />
    </>
  )
}
