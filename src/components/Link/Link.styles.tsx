import styled from 'styled-components'
import { device } from '../../utils/mediaQueries.styles'

export const A = styled.a`
  color: ${({ theme }) => theme.components.link.color};
  text-decoration: ${({ theme }) => theme.components.link.textDecoration};
  font-size: 5vh;
  text-align: center;
`