import React from 'react'

import { FormWrapper } from 'features/FormWrapper'
import { Form } from 'features/Form'

const schema = {
  title: "A registration form",
  description: "A simple form example.",
  type: "object",
  required: [
    "firstName",
    "lastName",
  ],
  properties: {
    firstName: {
      type: "string",
      title: "First name",
      default: "Chuck"
    },
    lastName: {
      type: "string",
      title: "Last name"
    },
  }
}


const App: React.FC = () => (
  <FormWrapper>
    <Form schema={schema}/>
  </FormWrapper>
)

export default App
