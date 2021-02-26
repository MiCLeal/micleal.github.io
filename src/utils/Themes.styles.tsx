import { Theme } from './interfaces/Theme'

export const DarkTheme: Theme = {
  name: 'Dark',
  components: {
    header: {
      height: '50vh',
      width: '100%',
      background: '#252323',
      color: '#fff',
    },
    toggle: {
      background: '#ff3939',
      color: '#fff',
    },
    link: {
      color: '#ff3939',
      textDecoration: 'none',
    },
  },
}

export const LightTheme: Theme = {
  name: 'Light',
  components: {
    header: {
      height: '50vh',
      width: '100%',
      background: '#fff',
      color: '#000',
    },
    toggle: {
      background: '#fff',
      color: '#ff3939',
    },
    link: {
      color: '#ff3939',
      textDecoration: 'none',
    },
  },
}
