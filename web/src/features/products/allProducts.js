import textbooks from "./textbooks/textbooksData";
import bags from "./bags/bagsData";
import tools from "./tools/toolsData";

const allProducts = [
  ...textbooks,
  ...bags,
  ...tools
];

export default allProducts;
