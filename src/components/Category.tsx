import type { Category as TCategory } from "@/types/Category";

type CategoryProps = {
  category: TCategory;
};

const Category = ({ category }: CategoryProps) => {
  return <li>{category.name}</li>;
};

export default Category;
