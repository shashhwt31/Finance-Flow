import { useState } from "react";
import type { Transaction } from "../types/Transaction";
import AddTransactionForm from "../components/AddTransactionForm";
import SummaryCard from "../components/SummaryCard";

function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  };

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "Income")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "Expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800">
        FinanceFlow Dashboard
      </h1>

      <p className="mt-2 text-gray-500">
        Welcome to your personal finance dashboard.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <SummaryCard
          title="Total Income"
          amount={`₹${totalIncome.toLocaleString("en-IN")}`}
        />

        <SummaryCard
          title="Total Expenses"
          amount={`₹${totalExpenses.toLocaleString("en-IN")}`}
        />

        <SummaryCard
          title="Balance"
          amount={`₹${balance.toLocaleString("en-IN")}`}
        />
      </div>

      <AddTransactionForm
        onAddTransaction={handleAddTransaction}
      />

      <div className="bg-white rounded-xl shadow-md p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Transactions
        </h2>

        {transactions.length === 0 ? (
          <p className="text-gray-500">
            No transactions yet.
          </p>
        ) : (
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
  <p className="font-semibold text-lg">
    {transaction.description}
  </p>

  <p className="text-gray-500">
    ₹{transaction.amount.toLocaleString("en-IN")}
  </p>

  <div className="flex gap-2 mt-1">
    <span
      className={`font-semibold ${
        transaction.type === "Income"
          ? "text-green-600"
          : "text-red-600"
      }`}
    >
      {transaction.type}
    </span>

    <span className="text-gray-500">
      • {transaction.category}
    </span>
  </div>
</div>

                <button
                  onClick={() =>
                    handleDeleteTransaction(transaction.id)
                  }
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;