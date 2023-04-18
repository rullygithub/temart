import { createContext, useContext, useReducer } from "react";
import {faker} from "@faker-js/faker";
import { cartReducer } from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const product = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name:faker.commerce.productName(),
    price: faker.commerce.price(), // 828.00
    image: faker.image.fashion(),
    desc:faker.commerce.productDescription(),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    product: product,
  })

  return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
    return useContext(Cart)
}