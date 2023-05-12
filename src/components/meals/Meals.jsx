import React, { useEffect, useState } from "react";
// import { product } from "../utils/constants";
import styled from "styled-components";
import { MealSummaryCard } from "./MealSummaryCard";
import { MealItem } from "./MealItem";
import { fetchRequest } from "../lib/fetApi";
import { useSortData } from "../../hooks/sort";
import { Button } from "../UI/Button";

export const Meals = React.memo(() => {
  console.log("MEALS");
  const [meals, setMeals] = useState();
  const { sortData, sort } = useSortData(meals);

  async function getFoods() {
    console.log("Meals Fethc");
    const response = await fetchRequest("/foods");
    setMeals(response);
  }

  useEffect(() => {
    getFoods();
  }, []);
  return (
    <>
      <MealSummaryCard />
      <Container>
        <div style={{ display: "flex" }}>
          <Button onClick={() => sort("ASC")}>ASC</Button>
          <Button onClick={() => sort("DESC")}>DESC</Button>
        </div>

        {sortData?.map((meal) => (
          <MealItem key={meal._id} meal={meal} />
        ))}
      </Container>
    </>
  );
});

const Container = styled.div`
  background-color: #fff;
  width: 80%;
  margin: 50px auto;
  padding: 40px;
  border-radius: 16px;
  margin-top: 40px;
`;
