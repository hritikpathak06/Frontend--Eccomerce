import { useState, useEffect } from "react";
import axios from "axios";

export function useCategory() {
  const [categories, setCategories] = useState([]);
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "https://backendd-delta.vercel.app/api/v1/category/get-categories"
      );
      if (data?.success) {
        setCategories(data.categories);
      } else {
        alert("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return categories;
}
