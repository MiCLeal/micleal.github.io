import * as React from 'react'
import { ToggleButton } from './ThemeToggle.styles'
import { useDispatch, useSelector } from 'react-redux'
import { applyTheme } from '../../redux/themeActions'
import { DarkTheme, LightTheme } from '../../utils/Themes.styles'

const ThemeToggle = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state: any) => state.theme)

  const handleThemeChange = () => {
    if (theme.name === 'Light') dispatch(applyTheme(DarkTheme))
    else dispatch(applyTheme(LightTheme))
  }

  return <ToggleButton onClick={handleThemeChange}>Theme</ToggleButton>
}

export default ThemeToggle
