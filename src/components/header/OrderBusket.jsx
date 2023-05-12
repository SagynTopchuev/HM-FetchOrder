import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as BascketIcon } from "../../assets/icons/HeaderIcon.svg";
import { CartContext } from "../../store/cart-context";

export const OrderBucket = ({ children, onToggle }) => {
  const context = useContext(CartContext);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass("bump");
    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [context.addItemToCartHandler]);

  return (
    <Button className={animationClass} onClick={onToggle}>
      <BascketIcon />
      <OrsedBucketTitle> {children} </OrsedBucketTitle>
      <OrderBucketCount>{context.totalAmount}</OrderBucketCount>
    </Button>
  );
};

const Button = styled.button`
  width: 249px;
  height: 59px;

  background: #5a1f08;

  border-radius: 30px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #4d1601;
  }

  &:active {
    background-color: #993108;
  }

  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const OrsedBucketTitle = styled.span`
  font-weight: 600;
  font-size: 16px;

  line-height: 24px;
  color: #ffffff;
  margin: 0 24px 0 13px;
`;

const OrderBucketCount = styled.span`
  background: #8a2b06;
  border-radius: 30px;

  padding: 4px 13px;
  color: #fff;
`;
