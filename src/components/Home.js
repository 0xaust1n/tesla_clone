import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        background="model-s.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        background="model-y.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        background="model-3.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery"
        background="model-x.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
