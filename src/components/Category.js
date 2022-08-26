function Category({ category }) {
  return (
    <div className="category-card" >
      <div className="category-icon-box">
        <img
          src={ category.icon }
          alt={ category.name }
          className="category-icon"
        />
      </div>

      <h4>{ category.name }</h4>
    </div>
  );
}

export default Category;
