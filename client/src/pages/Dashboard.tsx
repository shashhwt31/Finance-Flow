import { useState } from "react";
import type { Transaction } from "../types/Transaction";
import AddTransactionForm from "../components/AddTransactionForm";
import SummaryCard from "../components/SummaryCard";

function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const handleAddTransaction = (transaction: Transaction) => {
    console.log("Received in Dashboard:", transaction);
    setTransactions((prev) => [...prev, transaction]);
  };
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
          amount="₹0"
        />

        <SummaryCard
          title="Total Expenses"
          amount="₹0"
        />

        <SummaryCard
          title="Balance"
          amount="₹0"
        />
      </div>
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
}

export default Dashboard;