import React from "react";
import styled from "styled-components";
import summaryImage from "../../assets/images/pexels-alexy-almond-3756523 1 (1).png";
export const MealSummary = React.memo(() => {
  console.log("MealsSummary");
  return (
    <Container>
      <Image src={summaryImage} alt="summary" />
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  margin-top: 101px;
`;
