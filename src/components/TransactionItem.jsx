// TransactionItem.jsx
export default function TransactionItem({ tx, onDelete }) {
  const sign = tx.amount > 0 ? "+" : "-";
  const amountClass =
    tx.amount > 0
      ? "text-green-600 dark:text-green-400"
      : "text-red-600 dark:text-red-400";

  return (
    <li
      className={`flex justify-between items-center p-5 rounded-xl border-2 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:-translate-y-0.5 ${
        tx.amount > 0
          ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-600 hover:border-green-300 dark:hover:border-green-500"
          : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-600 hover:border-red-300 dark:hover:border-red-500"
      }`}
    >
      <span className="text-gray-900 dark:text-gray-100 font-medium text-lg">
        {tx.text}
      </span>
      <div className="flex items-center space-x-4">
        <span className={`font-bold text-xl ${amountClass}`}>
          {sign}${Math.abs(tx.amount).toFixed(2)}
        </span>
        <button
          onClick={() => onDelete(tx.id)}
          className="text-gray-500 hover:text-red-500 dark:hover:text-red-300 text-2xl font-bold transition-all duration-200 p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg hover:scale-110"
          aria-label="Delete transaction"
        >
          ×
        </button>
      </div>
    </li>
  );
}