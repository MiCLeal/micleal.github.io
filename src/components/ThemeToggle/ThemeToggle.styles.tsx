import styled from 'styled-components'

export const ToggleButton = styled.button`
  margin-left: auto;
  background: ${({ theme }) => theme.components.toggle.background};
  color: ${({ theme }) => theme.components.toggle.color};
  border-radius: 5px;
  outline: none;
`