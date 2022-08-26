// components
import Category from "../../components/Category";

import { CATEGORIES } from "../../constants";

function Categories({ pets }) {
  return (
    <div className="categories">
      <h3>Categories</h3>
      <div className="categories-row" >
        {
          CATEGORIES.map(category => {
            return <Category category={ category } key={ category.name } />            
          })
        }
      </div>
    </div>
  );
}

export default Categories;
