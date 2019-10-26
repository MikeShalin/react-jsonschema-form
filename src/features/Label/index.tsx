import React from 'react'

import styled from 'styled-components'

type TProps = {
  children: string,
  required?: boolean
}

const LabelUI = styled.label`
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
`

export const Label = ({ children, required }: TProps) => (
  <LabelUI>{children} {required && '*'}</LabelUI>
)
