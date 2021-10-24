import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import { TableQueryResponse, Transaction, TransactionInput } from '../types'

type TransactionsContextData = {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => void
}
export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

type TransactionsProviderProps = { children: React.ReactNode }
export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get<TableQueryResponse>('/transactions')
      .then(resp => setTransactions(resp.data.transactions))
  }, [])

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
