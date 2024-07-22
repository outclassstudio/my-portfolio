import { atom } from "recoil";
import { portfolios } from "../data/portfolio";

export const portfolioState = atom({
  key: "portfolioState",
  default: portfolios[0],
});
