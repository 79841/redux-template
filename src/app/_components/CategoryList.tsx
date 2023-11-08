"use client";

import { categoryListActions, selectCategoryList } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import Category from "../../components/Category";
import { useState } from "react";

const CategoryList = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector(selectCategoryList);

  const [newCategory, setNewCategory] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewCategory(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(categoryListActions.add({ name: newCategory }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="category" type="text" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {categoryList.map((category) => (
          <Category key={category.name} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
