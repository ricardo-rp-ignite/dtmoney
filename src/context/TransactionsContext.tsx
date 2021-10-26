import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import {
  PostResponse,
  TableQueryResponse,
  Transaction,
  TransactionInput,
} from '../types'

type TransactionsContextData = {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
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

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post<PostResponse>('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })

    setTransactions([...transactions, response.data.transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
