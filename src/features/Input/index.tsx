import React from 'react'

import styled from 'styled-components'
import size from 'lodash/size'

import { focus } from 'styles/'
import { formItemHandler } from 'hooks/'

type TProps = {
  type: string,
  name: string,
  required?: boolean
  value?: string,
  minLength?: number,
  setError: (error: boolean) => void,
  onChangeFormData: (value: string) => void,
}

const InputUI = styled.input`
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  ${focus}
`

export const Input = ({
  value,
  setError,
  minLength,
  type,
  onChangeFormData: callback,
  ...props
}: TProps) => {
  const {
    mainHandler,
    handlerOnChange,
    initialValue,
  } = formItemHandler({ callback, value })

  const handlerOnBlur = (value: string) => {
    if (minLength) {
      setError(size(value) < minLength)
    }
    if (type === 'tel') {
      const mask = '^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$'
      const valid = value.match(mask)
      setError(!valid)
    }
  }
  return (
    <InputUI
      onChange={mainHandler(handlerOnChange)}
      onBlur={mainHandler(handlerOnBlur)}
      type={type}
      defaultValue={initialValue}
      {...props}
    />
  )
}
