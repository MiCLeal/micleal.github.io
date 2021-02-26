import * as Actions from './themeActions'
import { LightTheme } from '../utils/Themes.styles'

const initialState = {
  theme: LightTheme,
}

export const themeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case Actions.APPLY_THEME:
      return Object.assign({}, { theme: action.payload })
    default:
      return state
  }
}
