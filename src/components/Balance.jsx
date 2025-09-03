// Balance.jsx
export default function Balance({ balance }) {
  return (
    <section className="mb-8 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl border-2 border-blue-200 dark:border-gray-500 shadow-[0_8px_30px_rgba(0,100,255,0.15)]">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Your Balance</h2>
      <p
        className={`text-4xl font-bold ${
          balance >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
        }`}
      >
        {balance.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </section>
  );
}