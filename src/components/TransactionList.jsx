// TransactionList.jsx
import TransactionItem from "./TransactionItem";

export default function TransactionList({ transactions, onDelete }) {
  const hasItems = transactions.length > 0;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-3">
        Transactions
      </h2>
      {!hasItems && (
        <p className="text-gray-500 dark:text-gray-400 text-center py-8 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
          No transactions yet.
        </p>
      )}
      {hasItems && (
        <ul className="space-y-3">
          {transactions.map((tx) => (
            <TransactionItem key={tx.id} tx={tx} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </section>
  );
}
