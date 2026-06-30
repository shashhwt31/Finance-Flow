import type { Transaction } from "../types/Transaction";
import TransactionItem from "./TransactionItem";

type TransactionListProps = {
  transactions: Transaction[];
  onDelete: (id: number) => void;
};

function TransactionList({
  transactions,
  onDelete,
}: TransactionListProps) {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TransactionList;