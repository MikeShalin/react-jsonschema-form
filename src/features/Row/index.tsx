import React, {
  ReactNode,
  Children,
  cloneElement,
  useState,
} from 'react'

import styled from 'styled-components'

import { errorColor } from 'styles/'

type TProps = {
  children: ReactNode,
  required?: boolean,
}

type TOutterProps = {
  setError: (error: boolean) => void,
}

type TStyleProps = { error: boolean }

const color = `color: ${errorColor};`

const Error = styled.li`
  color: #a94442;
`

const RowUI = styled.div`
  margin-bottom: 15px;
  
  label{
    ${({ error }: TStyleProps) => error && color}
  }
  textarea, input {
    ${({ error }: TStyleProps) => {
  const style = `${color}
        border-color: ${errorColor};
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px #ce8483;
        `
  return error && style
}
  }
`

export const Row = ({
  children,
  required,
}: TProps) => {
  const [error, setError] = useState(false)
  return (
    <RowUI error={error}>{
      Children.map(children, (child: ReactNode) => (
        child && cloneElement(child as React.ReactElement<TProps & TOutterProps>, {
          required,
          setError,
        })
      ))
    }
      {
        error && (
          <Error>Error</Error>
        )}
    </RowUI>
  )
}
