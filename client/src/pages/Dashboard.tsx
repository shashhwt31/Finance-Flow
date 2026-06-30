import { useEffect, useState } from "react";
import type { Transaction } from "../types/Transaction";
import AddTransactionForm from "../components/AddTransactionForm";
import SummaryCard from "../components/SummaryCard";
import SearchBar from "../components/SearchBar";
import TransactionList from "../components/TransactionList";
import FilterBar from "../components/FilterBar";

function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"All" | "Income" | "Expense">("All");

  const handleAddTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "Income")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "Expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;

  const filteredTransactions = transactions.filter((transaction) => {
  const matchesSearch = transaction.description
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesFilter =
    filter === "All" || transaction.type === filter;

  return matchesSearch && matchesFilter;
});

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

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <FilterBar
  filter={filter}
  setFilter={setFilter}
/>

        {filteredTransactions.length === 0 ? (
          <p className="text-gray-500">
            No transactions found.
          </p>
        ) : (
          <TransactionList
            transactions={filteredTransactions}
            onDelete={handleDeleteTransaction}
          />
        )}
      </div>
      
    </div>
  );
}

export default Dashboard;