export const UISchema: {[key: string]: {
    widget: string,
    emptyValue?: string,
    description? : string,
    type?: string,
    help?: string,
  }} = {
  firstName: {
    widget: 'input',
  },
  lastName: {
    widget: 'input',
  },
  age: {
    widget: 'input',
    emptyValue: '0',
    description: '(earthian year)',
    type: 'number',
  },
  bio: {
    widget: 'textarea',
  },
  password: {
    widget: 'input',
    type: 'password',
    help: 'Hint: Make it strong!',
  },
  date: {
    widget: 'input',
  },
  telephone: {
    widget: 'input',
    type: 'tel',
    emptyValue: '',
  }
}
