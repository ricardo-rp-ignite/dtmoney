import { useState, ChangeEvent } from 'react'

export function useInput(initialValue: string | number) {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value)

  return { value, onChange }
}
