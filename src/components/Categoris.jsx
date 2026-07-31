import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch('/categories.json').then(res=>res.json()) ;

const Categoris = () => {
 const categories = use(categoryPromise);

    return (
      <div>
        <h2 className="font-semibold text-xl text-accent-content">
          All Category ({categories.length})
        </h2>
        <div className="grid grid-cols-1 gap-2 mt-3">
          {categories.map((category) => (
            <NavLink
              to={`/category/${category.id}`}
              className={
                "hover:bg-base-200 btn bg-base-100 border-0 text-left font-medium text-[#9f9f9f]"
              }
              key={category.id}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
};

export default Categoris;