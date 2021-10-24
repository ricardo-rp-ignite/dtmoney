import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { TableQueryResponse, Transaction } from '../../types'
import { Container } from './styles'

export function TransactionsTable(): React.ReactElement {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get<TableQueryResponse>('/transactions')
      .then(resp => setTransactions(resp.data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoría</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
