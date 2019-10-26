import React from 'react'

import styled from 'styled-components'

import { focus } from 'styles/'
import { formItemHandler } from 'hooks/'

type TProps = {
  required?: boolean
  value?: string,
  onChangeFormData: (value: string) => void,
  name: string,
}

const TextAreaUI = styled.textarea`
  height: auto;
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
   box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
   ${focus}
`

export const TextArea = ({
  value,
  onChangeFormData: callback,
  ...props
}: TProps) => {
  const {
    mainHandler,
    handlerOnChange,
    initialValue,
  } = formItemHandler({ callback, value })

  return (
    <TextAreaUI
      onChange={mainHandler(handlerOnChange)}
      defaultValue={initialValue}
      {...props}
    />
  )
}
