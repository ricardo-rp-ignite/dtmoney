export type Transaction = {
  id: string
  title: string
  amount: number
  type: 'deposit' | 'withdraw'
  category: string
  createdAt: string
}

export type TransactionType = Transaction['type']

export type TableQueryResponse = { transactions: Transaction[] }
