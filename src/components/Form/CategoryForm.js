import React from "react";

const CategoryForm = ({ value, setValue, handleSubmit }) => {
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 flex">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter New Category"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          <button type="submit" className="btn btn-secondary text-red-400 ml-3">
            Submit
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CategoryForm;
