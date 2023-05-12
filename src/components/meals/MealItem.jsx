import React, { useContext } from "react";
import styled from "styled-components";
import { MealItemForm } from "./MealItemForm";
import { CartContext } from "../../store/cart-context";

export const MealItem = ({ meal }) => {
  const context = useContext(CartContext);

  function addProduct(amount) {
    context.addItemToCartHandler(meal._id, +amount);
  }

  return (
    <Container>
      <StyledMealItem>
        <h4>{meal.title}</h4>
        <p>{meal.description}</p>
        <span>$ {meal.price}</span>
      </StyledMealItem>
      <MealItemForm inputId={meal.id} onAdd={addProduct} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #d6d6d6;
  :last-child {
    border-bottom: none;
  }
`;
const StyledMealItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-top: 24px;
  }

  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    color: #ad5502;
  }
`;
