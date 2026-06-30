type SummaryCardProps = {
  title: string;
  amount: string;
};

function SummaryCard({ title, amount }: SummaryCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-gray-500 text-sm">{title}</h2>

      <p className="text-3xl font-bold mt-2">
        {amount}
      </p>
    </div>
  );
}

export default SummaryCard;