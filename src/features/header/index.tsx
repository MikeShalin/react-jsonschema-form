import React from 'react'

import styled from 'styled-components'

type TProps = {}

const Legend = styled.legend`
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: inherit;
  color: #333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
`

export const Header = ({}: TProps) => (
  <Legend>A registration form</Legend>
)
