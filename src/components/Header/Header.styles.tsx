import styled from 'styled-components'
import { device } from '../../utils/mediaQueries.styles'

export const Container = styled.header`
  height: ${({ theme }) => theme.components.header.height};
  width: ${({ theme }) => theme.components.header.width};
  color: ${({ theme }) => theme.components.header.color};
  background: ${({ theme }) => theme.components.header.background};
  text-align: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
`

export const Paraghaph = styled.p`
  
`

