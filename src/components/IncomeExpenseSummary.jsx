// IncomeExpenseSummary.jsx
export default function IncomeExpenseSummary({ transactions }) {
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <section className="mb-8 grid grid-cols-2 gap-6">
      <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl text-center border-2 border-green-200 dark:border-green-600 shadow-[0_8px_30px_rgba(0,200,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,200,0,0.25)] transition-all duration-300 transform hover:-translate-y-1">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
          Income
        </h3>
        <p className="text-green-600 dark:text-green-400 font-bold text-2xl">
          {income.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl text-center border-2 border-red-200 dark:border-red-600 shadow-[0_8px_30px_rgba(255,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(255,0,0,0.25)] transition-all duration-300 transform hover:-translate-y-1">
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
          Expense
        </h3>
        <p className="text-red-600 dark:text-red-400 font-bold text-2xl">
          {Math.abs(expense).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
    </section>
  );
}