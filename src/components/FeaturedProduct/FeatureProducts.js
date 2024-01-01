import { NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export default function FeatureProducts({
  id,
  name,
  description,
  images,
  price,
  category,
  quantity,
  rating,
}) {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: rating,
    isHalf: true,
  };
  return (
    <div className="bg-white">
      <NavLink to={`/product/${id}`}>
        <div
          className="mx-auto grid max-w-2xl grid-cols-1 items-center  gap-x-8 gap-y-16 px-4 py-24 sm:px-6  lg:max-w-7xl  lg:grid-cols-2 lg:px-8 "
          key={id}
        >
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#33475b] sm:text-2xl">
              {name}
            </h2>
            <p className="mt-4 text-gray-500">{description}</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-extrabold text-gray-900 ">Price</dt>
                <dd className="mt-2 text-sm text-gray-500">₹:{price}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-extrabold text-gray-900">Category</dt>
                <dd className="mt-2 text-sm text-gray-500">{category}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-extrabold text-gray-900">Rating</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  <ReactStars size={25} {...options} />
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-extrabold text-gray-900">Stock</dt>
                <dd className="mt-2 text-sm text-gray-500">{quantity}</dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 mt-5">
            <img
              src={images[0].url}
              className="rounded-lg  bg-white"
              style={{ width: "150px", height: "300px", objectFit: "contain" }}
            />
            <img
              src={images[1].url}
              className="rounded-lg  bg-white"
              style={{ width: "150px", height: "300px", objectFit: "contain" }}
            />
            <img
              src={images[2].url}
              className="rounded-lg bg-white"
              style={{ width: "150px", height: "300px", objectFit: "contain" }}
            />
            <img
              src={images[3].url}
              className="rounded-lg  bg-white"
              style={{ width: "150px", height: "300px", objectFit: "contain" }}
            />
          </div>
        </div>
      </NavLink>
    </div>
  );
}
