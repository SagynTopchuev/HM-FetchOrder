import { useState } from "react";
import { Header } from "./components/header/Header";
import { MealSummary } from "./components/meal-summary/MealSummary";
import { Meals } from "./components/meals/Meals";
import { Basket } from "./components/basket/Basket";
import CardProvider from "./store/cart-context";

function App() {
  const [toggle, setToggle] = useState(false);
  
  console.log("App");

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <CardProvider>
      <Header onToggle={toggleHandler} />
      <MealSummary />
      <Meals />
      {toggle && <Basket onToggle={toggleHandler} />}
    </CardProvider>
  );
}

export default App;
