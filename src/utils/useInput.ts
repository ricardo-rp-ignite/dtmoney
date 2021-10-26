import { useState, ChangeEvent, Dispatch, useCallback } from 'react'

export type UseInputReturn<T> = [
  value: T,
  bind: {
    value: T
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  },
  setValue: Dispatch<React.SetStateAction<T>>
]

export function useInput<T>(initialValue: T): UseInputReturn<T> {
  const [value, setValue] = useState<T>(initialValue)

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setValue(event.currentTarget.value as unknown as T),
    []
  )

  return [value, { value, onChange }, setValue]
}
