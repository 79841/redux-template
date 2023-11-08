import { categoryListActions } from "@/store";
import type { Category as TCategory } from "@/types/Category";
import { useDispatch } from "react-redux";

type CategoryProps = {
  category: TCategory;
};

const Category = ({ category }: CategoryProps) => {
  const dispatch = useDispatch();
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(categoryListActions.delete(category.name));
  };
  return (
    <li>
      {category.name}&nbsp;&nbsp;
      <button onClick={handleClick}>delete</button>
    </li>
  );
};

export default Category;
