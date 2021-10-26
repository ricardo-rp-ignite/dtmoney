import {
  useState,
  useCallback,
  SetStateAction,
  Dispatch,
  ChangeEventHandler,
} from 'react'

export type UseInputReturn<T> = [
  value: T,
  bind: {
    value: T
    onChange: ChangeEventHandler<HTMLInputElement>
  },
  setValue: Dispatch<SetStateAction<T>>
]

export function useInput<T>(initialValue: T): UseInputReturn<T> {
  const [value, setValue] = useState(initialValue)

  const onChange = useCallback(e => setValue(e.currentTarget.value), [])

  return [value, { value, onChange }, setValue]
}
