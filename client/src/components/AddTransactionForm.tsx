import type { Transaction } from "../types/Transaction";
import { useState } from "react";
type AddTransactionFormProps = {
  onAddTransaction: (transaction: Transaction) => void;
};
function AddTransactionForm({
  onAddTransaction,
}: AddTransactionFormProps) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState<"Income" | "Expense">("Expense");
    const handleSubmit = () => {
      onAddTransaction({
        id: Date.now(),
        description,
        amount: Number(amount),
        type,
      });

      setDescription("");
      setAmount("");
      setType("Expense");
  };
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        Add Transaction
      </h2>

      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Description"
          className="border rounded-lg p-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          className="border rounded-lg p-3"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
         className="border rounded-lg p-3"
         value={type}
         onChange={(e) => setType(e.target.value as "Income" | "Expense")}
        >
          <option>Income</option>
          <option>Expense</option>
        </select>

        <button
         onClick={handleSubmit}
         className="bg-blue-600 text-white rounded-lg p-3"
         >
          Add Transaction
        </button>

      <div className="mt-4 text-gray-600">

        <p>Description: {description}</p>

        <p>Amount: {amount}</p>

        <p>Type: {type}</p>

      </div>
</div>
</div>   
);
}

export default AddTransactionForm;