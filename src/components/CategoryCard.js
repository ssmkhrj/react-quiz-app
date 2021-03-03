export default function CategoryCard({
  id,
  title,
  icon,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <li
      elevation={0}
      className={`category-card ${
        id === selectedCategory ? "category-card--selected" : ""
      }`}
      onClick={() => setSelectedCategory(id)}
      onKeyDown={(e) => e.code === "Enter" && setSelectedCategory(id)}
      tabIndex="0"
    >
      {icon()}
      <p>{title}</p>
    </li>
  );
}
