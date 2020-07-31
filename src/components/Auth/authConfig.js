import Input from '../UI/Form/Input/Input';

export default {
  login: {
    form: {
      controls: {
        email: {
          component: Input,
          id: 'email',
          value: '',
          props: {
            type: 'email',
            placeholder: 'Your Email'
          },
          validation: {
            required: true,
            isEmail: true
          },
          valid: false,
          touched: false
        },
        password: {
          component: Input,
          id: 'password',
          value: '',
          props: {
            type: 'password',
            placeholder: 'Your Password'
          },
          validation: {
            required: true,
            minLength: 6,
            maxLength: 20
          },
          valid: false,
          touched: false
        }
      },
      action: 'login',
      buttonText: 'Go'
    },
    title: 'Log in',
    bottomLink: {
      url: '/create-account',
      text: 'Create account'
    }
  },
  signup: {
    form: {
      controls: {
        email: {
          component: Input,
          id: 'email',
          value: '',
          props: {
            type: 'email',
            placeholder: 'Your Email'
          },
          validation: {
            required: true,
            isEmail: true
          },
          valid: false,
          touched: false
        },
        username: {
          component: Input,
          id: 'username',
          value: '',
          props: {
            type: 'text',
            placeholder: 'New Username'
          },
          validation: {
            required: true,
            minLength: 4,
            maxLength: 16
          },
          valid: false,
          touched: false
        },
        password: {
          component: Input,
          id: 'password',
          value: '',
          props: {
            type: 'password',
            placeholder: 'Your Password'
          },
          validation: {
            required: true,
            minLength: 6,
            maxLength: 20
          },
          valid: false,
          touched: false
        }
      },
      action: 'signup',
      buttonText: 'Start'
    },
    title: 'Create account',
    bottomLink: {
      url: '/login',
      text: 'Log in'
    }
  }
}