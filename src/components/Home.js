import React from 'react';
import styled from "styled-components";
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-Back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Custom order"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories (1).jpg"
                leftBtnText="Shop now"
            />
        </Container>
    );
}

export default Home;

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   overflow: hidden; /* To prevent scrollbars */
`;
