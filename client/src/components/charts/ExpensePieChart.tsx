import type { Transaction } from "../../types/Transaction";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type ExpensePieChartProps = {
  transactions: Transaction[];
};

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
];

function ExpensePieChart({
  transactions,
}: ExpensePieChartProps) {
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "Expense"
  );

  const categoryData = expenseTransactions.reduce((acc, transaction) => {
    const existing = acc.find(
      (item) => item.name === transaction.category
    );

    if (existing) {
      existing.value += transaction.amount;
    } else {
      acc.push({
        name: transaction.category,
        value: transaction.amount,
      });
    }

    return acc;
  }, [] as { name: string; value: number }[]);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        Expense Breakdown
      </h2>

      {categoryData.length === 0 ? (
        <p className="text-gray-500">
          No expense data available.
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {categoryData.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ExpensePieChart;