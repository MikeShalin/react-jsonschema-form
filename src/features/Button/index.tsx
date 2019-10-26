import React from 'react'

import styled from 'styled-components'

type TProps = {
  children: string
}

const ButtonUI = styled.button`
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
`

export const Button = ({ children }: TProps) => (
  <ButtonUI>
    { children }
  </ButtonUI>
)
