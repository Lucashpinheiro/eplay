import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Props } from '.'

import { cores } from '../../styles'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  padding: 8px 16px;
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.branca)};
`
export const ButtonLink = styled(Link)`
  background-color: transparent;
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  padding: 8px 16px;
  border: 2px solid ${cores.branca};
  border-radius: 8px;
`
