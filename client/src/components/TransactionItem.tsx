import type { Transaction } from "../types/Transaction";

type TransactionItemProps = {
  transaction: Transaction;
  onDelete: (id: number) => void;
};

function TransactionItem({
  transaction,
  onDelete,
}: TransactionItemProps) {
  return (
    <div className="flex justify-between items-center bg-gray-50 rounded-xl p-4">
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
        onClick={() => onDelete(transaction.id)}
        className="text-red-500 hover:text-red-700 font-semibold"
      >
        Delete
      </button>
    </div>
  );
}

export default TransactionItem;