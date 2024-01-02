import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import AllProducts from "../All -Products/AllProducts";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { prices } from "../Prices/Prices";
import { ratings } from "../Prices/Ratings";
import { Pagination } from "antd";

export default function CategoryFilters() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [rating, setRatings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://backendd-delta.vercel.app/api/v1/product/all-products"
      );
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error("cant Fetch the Products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  useEffect(() => {
    if (checked.length || radio.length) filteredProduct();
  }, [checked, radio]);

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "https://backendd-delta.vercel.app/api/v1/category/get-categories"
      );
      if (data?.success) {
        setCategories(data.categories);
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const handleFilter = async (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((category) => category != id);
    }
    setChecked(all);
  };

  // Filters
  const filteredProduct = async (req, res) => {
    try {
      const { data } = await axios.post(
        "https://backendd-delta.vercel.app/api/v1/product/product-filter",
        { checked, radio, rating }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
    if (checked.length === 0) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) {
      setCurrentPage(1);
      setPageSize(26);
      filteredProduct();
    } else {
      getAllProducts();
    }
  }, [checked, radio]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-[#33475b]">
              All Products
            </h1>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <button className="btn btn-warning m-auto w-100">
                  Reset Filters
                </button>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {categories.map((category) => (
                    <Checkbox
                      key={category._id}
                      onChange={(e) =>
                        handleFilter(e.target.checked, category._id)
                      }
                    >
                      {category.name}
                    </Checkbox>
                  ))}
                </ul>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                    {prices.map((p) => (
                      <div key={p._id}>
                        <Radio className="mt-3 text-1xl" value={p.array}>
                          {p.name}
                        </Radio>
                      </div>
                    ))}
                  </Radio.Group>
                </ul>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  <Radio.Group>
                    {ratings.map((r) => (
                      <div key={r._id}>
                        <Radio className="mt-3" value={r.array}>
                          {r.name}
                        </Radio>
                      </div>
                    ))}
                  </Radio.Group>
                </ul>
              </form>
              <div className="lg:col-span-3 flex all-product-section flex-wrap">
                {products &&
                  products
                    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                    .map((product) => (
                      <>
                        <AllProducts product={product} />
                      </>
                    ))}
                <div className="mt-8">
                  {checked.length === 0 && radio.length === 0 && (
                    <Pagination
                      current={currentPage}
                      total={products.length}
                      pageSize={pageSize}
                      onChange={handlePageChange}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
