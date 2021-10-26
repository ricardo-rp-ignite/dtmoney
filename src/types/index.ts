export type Transaction = {
  id: string
  title: string
  amount: number
  type: 'deposit' | 'withdraw'
  category: string
  createdAt: string
}

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export type TransactionType = Transaction['type']

export type TableQueryResponse = { transactions: Transaction[] }

export type PostResponse = { transaction: Transaction }
