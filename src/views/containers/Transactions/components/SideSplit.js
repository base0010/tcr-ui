import React from 'react'
import styled from 'styled-components'

import { theme } from 'views/global-styles'

import Text from 'views/components/Text'
import Section from 'views/components/Section'

import SidePanel from './SidePanel'

const SidePanelSplit = ({ children, ...props }) => (
  <Main {...props}>
    <Part>{children[0]}</Part>
    <Part>{children[1]}</Part>
  </Main>
)

const Main = styled.div`
  display: flex;
  width: calc(100% + ${SidePanel.HORIZONTAL_PADDING * 2}px);
  margin: 0 -${SidePanel.HORIZONTAL_PADDING}px;
  border: 1px solid ${theme.contentBorder};
  border-width: 1px 0;
`

const Part = styled.div`
  width: 50%;
  padding: 10px ${SidePanel.HORIZONTAL_PADDING}px;
  &:first-child {
    border-right: 1px solid ${theme.contentBorder};
  }
`

export default ({ leftTitle, leftItem, rightTitle, rightItem }) => (
  <SidePanelSplit
    children={[
      <Section>
        <Text weight="bold">{leftTitle}</Text>
        <h2>{leftItem}</h2>
      </Section>,
      <Section>
        <Text weight="bold">{rightTitle}</Text>
        <h2>{rightItem}</h2>
      </Section>,
    ]}
  />
)
