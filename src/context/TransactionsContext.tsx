import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import { TableQueryResponse, Transaction } from '../types'

export const TransactionsContext = createContext<Transaction[]>([])

type TransactionsProviderProps = { children: React.ReactNode }
export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get<TableQueryResponse>('/transactions')
      .then(resp => setTransactions(resp.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
