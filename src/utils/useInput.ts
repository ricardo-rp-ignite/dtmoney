import { useState, ChangeEvent } from 'react'

export function useInput<T extends string | number>(initialValue: T) {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value as T)

  return { value, onChange }
}
