/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import {getByText, render, screen } from "@testing-library/react";
import App from "../App";
import {products, cartItems} from "../../../mockData/data";
import {getProducts, getCartItems} from "../../services/products"
import { act } from 'react-dom/test-utils';

jest.mock("../../services/products.js");

// beforeEach(async() => {
//   await act( async() => {
//     await getProducts.mockResolvedValue(products);
//     await getCartItems.mockResolvedValue(cartItems);
//     render(<App />);
//   });
// });


test("contains h1 heading", async () => {
  await getProducts.mockResolvedValue(products);
  await getCartItems.mockResolvedValue(cartItems);
  render(<App />);
  // await screen.findByText("Yamaha Portable Keyboard");

  const heading = screen.getByRole("heading", {
    name: "The Shop!",
    level: 1,
  });
  expect(heading).toBeInTheDocument();
});

test("does not contain AddProductForm when 'Add to Cart' button is visible", async () => {

})

