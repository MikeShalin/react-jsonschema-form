import React, { BaseSyntheticEvent, ReactNode, useState } from 'react'

import map from 'lodash/map'
import get from 'lodash/get'
import reduce from 'lodash/reduce'
import styled from 'styled-components'

import { Header } from 'features/Header'
import { Row } from 'features/Row'
import { Label } from 'features/Label'
import { Input } from 'features/Input'
import { Button } from 'features/Button'
import { TextArea } from 'features/TextArea'

import { UISchema } from './config'

type TProperties = {
  [key: string]: {
    type: string,
    title: string,
    default?: string | undefined,
    minLength?: number,
  },
}

type TProps = {
  schema: {
    title: string,
    description: string,
    required: Array<string>,
    properties: TProperties,
  }
}

const FormUI = styled.form`
  padding-right: 15px;
  padding-left: 15px;
`

const FieldsetUI = styled.fieldset`
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}`

const Description = styled.p`
  margin: 0 0 10px;
`

const HelpBlock = styled.p`
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
`

const widgets: { [key: string]: React.ElementType } = {
  input: Input,
  textarea: TextArea,
}

export const Form = ({
  schema: {
    title,
    description,
    properties,
    required,
  },
}: TProps) => {
  const {
    onSubmit,
    handleChangeFormData,
  } = useForm(properties)
  return (
    <FormUI onSubmit={onSubmit}>
      <FieldsetUI>
        <Header>
          {title}
        </Header>
        <Description>{description}</Description>
        {
          map(properties, ({
            title,
            type,
            minLength,
            ...value
          }, name) => {
            const row = get(UISchema, name)
            if (!row) return null
            const Widget = widgets[row.widget]
            const { description, help } = row
            return (
              <Row
                key={name}
                required={required.includes(name)}
              >
                <Label>
                  {title}
                </Label>
                {
                  description && <Description>{description}</Description>
                }
                <Widget
                  name={name}
                  type={get(row, 'type', type)}
                  value={get(row, 'emptyValue', value.default)}
                  minLength={minLength}
                  onChangeFormData={handleChangeFormData(name)}
                />
                {
                  help && <HelpBlock>{help}</HelpBlock>
                }
              </Row>
            )
          })
        }
        <Button>
          Submit
        </Button>
      </FieldsetUI>
    </FormUI>
  )
}

const useForm = (properties: TProperties) => {
  const [formData, onChangeFormData] = useState({})
  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    const defaultProperties = reduce(properties, (result, value, key) => {
      const defaultValue = value.default
      if (defaultValue) {
        return {
          ...result,
          [key]: defaultValue,
        }
      }
      return result
    }, {})

    console.log('submitted formData', { ...defaultProperties, ...formData })
  }
  const handleChangeFormData = (name: string) => (value: string) => onChangeFormData({
    ...formData,
    [name]: name === 'age' ? +value : value,
  })

  return {
    onSubmit,
    handleChangeFormData,

  }
}
