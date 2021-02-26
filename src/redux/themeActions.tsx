import { Theme } from '../utils/interfaces/Theme'

export const APPLY_THEME = 'APPLY_THEME'

export const applyTheme = (theme: Theme) => {
  return {
    type: APPLY_THEME,
    payload: theme
  }
}