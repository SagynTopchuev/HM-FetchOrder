import React, { useContext } from "react";
import { Button } from "../UI/Button";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../assets/icons/btnPlus.svg";
import { ReactComponent as MinesIcon } from "../../assets/icons/btnMines.svg";
import { CartContext } from "../../store/cart-context";

export const BasketItem = ({ title, price, amount, id }) => {
  const { incrementAmount, decrementAmount, DELETE } = useContext(CartContext);

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        <InformationBlock>
          <p>${price}</p>
          <span>x {amount} </span>
        </InformationBlock>
        <ButtonBlock>
          <Button
            variant="outLine"
            borderRadius="squared"
            icon={<MinesIcon />}
            onClick={() => decrementAmount(id, amount - 1)}
          />
          <Button
            variant="outLine"
            borderRadius="squared"
            icon={<PlusIcon />}
            onClick={() => incrementAmount(id, amount)}
          />
          <Button
            variant="outLine"
            borderRadius="squared"
            onClick={() => DELETE(id)}
          >
            🗑 Удалить все
          </Button>
        </ButtonBlock>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 2px solid #d6d6d6;

  h4 {
    font-size: 20px;
    font-weight: 600;

    margin-bottom: 12px;
  }
`;
const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonBlock = styled.aside`
  display: flex;
  gap: 15px;
`;

const InformationBlock = styled.article`
  display: flex;
  width: 155px;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 18px;
    color: #ad5502;
  }
  span {
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    font-weight: 500;
    font-size: 16px;
    padding: 6px 14px;
  }
`;
