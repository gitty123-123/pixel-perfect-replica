import cupHot from "@/assets/cup-hot.jpg";
import cupCold from "@/assets/cup-cold.jpg";

export type Product = {
  id: string;
  name: string;
  size: "6 oz" | "6.5 oz";
  type: "Hot" | "Cold";
  image: string;
  summary: string;
  uses: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "6oz-hot",
    name: "6 oz Hot Paper Cup",
    size: "6 oz",
    type: "Hot",
    image: cupHot,
    summary: "A compact cup for hot beverages such as espresso-based drinks, tea and smaller coffee servings.",
    uses: ["Espresso & cortado", "Tea & karak", "Sampling & tasting"],
  },
  {
    id: "6-5oz-hot",
    name: "6.5 oz Hot Paper Cup",
    size: "6.5 oz",
    type: "Hot",
    image: cupHot,
    summary: "A slightly larger hot cup that leaves a little more room for milk-based drinks and comfortable serving.",
    uses: ["Flat white & cappuccino", "Office & pantry service", "Hospitality"],
  },
  {
    id: "6oz-cold",
    name: "6 oz Cold Paper Cup",
    size: "6 oz",
    type: "Cold",
    image: cupCold,
    summary: "A small-format cup intended for chilled beverages, juices and water in smaller portions.",
    uses: ["Water & juices", "Event refreshments", "Tasting portions"],
  },
  {
    id: "6-5oz-cold",
    name: "6.5 oz Cold Paper Cup",
    size: "6.5 oz",
    type: "Cold",
    image: cupCold,
    summary: "A cold-beverage cup offering slightly more capacity for iced drinks and soft beverages.",
    uses: ["Iced coffee shots", "Soft drinks", "Catering service"],
  },
];
