import React, { ReactNode } from 'react'

import styled from 'styled-components'

type TProps = {
  children: ReactNode,
}

const Form = styled.div`
  width: 50%;
  min-height: 10px;
  padding-right: 15px;
  padding-left: 15px;
`

export const FormWrapper = ({ children }: TProps) => <Form>{children}</Form>
