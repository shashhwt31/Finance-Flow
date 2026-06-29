type SummaryCardProps = {
  title: string;
  amount: string;
};

function SummaryCard({ title, amount }: SummaryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-gray-500 text-sm">{title}</h2>

      <p className="text-3xl font-bold mt-2">
        {amount}
      </p>
    </div>
  );
}

export default SummaryCard;