type FilterBarProps = {
  filter: "All" | "Income" | "Expense";
  setFilter: React.Dispatch<
    React.SetStateAction<"All" | "Income" | "Expense">
  >;
};

function FilterBar({
  filter,
  setFilter,
}: FilterBarProps) {
  return (
    <div className="flex gap-3 mb-4">
      {["All", "Income", "Expense"].map((item) => (
        <button
          key={item}
          onClick={() =>
            setFilter(item as "All" | "Income" | "Expense")
          }
          className={`px-4 py-2 rounded-lg ${
            filter === item
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;