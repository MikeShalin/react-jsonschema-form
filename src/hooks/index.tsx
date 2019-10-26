import React, { BaseSyntheticEvent, useState } from 'react'

type TArgs = {
  callback: (value: string) => void,
  value?: string,
}

export const formItemHandler = ({ callback, value }: TArgs) => {
  const [initialValue, onChange] = useState(value)
  const mainHandler = (callback: (value: string) => void) => (e: BaseSyntheticEvent) => {
    callback(e.target.value.trim())
  }
  const handlerOnChange = (value: string) => {
    onChange(value)
    callback(value)
  }
  return {
    mainHandler,
    handlerOnChange,
    initialValue,
  }
}
