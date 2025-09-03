// App.jsx
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenseSummary from "./components/IncomeExpenseSummary";
import TransactionList from "./components/TransactionList";
import AddTransactionForm from "./components/AddTransactionForm";

export default function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Add this temporarily to your App.jsx to debug
  useEffect(() => {
    console.log(
      "Dark mode class present:",
      document.documentElement.classList.contains("dark")
    );
    console.log("LocalStorage theme:", localStorage.getItem("theme"));
  }, []);

  const balance = transactions.reduce((sum, t) => sum + t.amount, 0);

  const addTransaction = (tx) => setTransactions((prev) => [...prev, tx]);
  const deleteTransaction = (id) =>
    setTransactions((prev) => prev.filter((t) => t.id !== id));

  return (
   // App.jsx - update the main container div
<div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center p-6 transition-colors">
  <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] p-8 border border-gray-300 dark:border-gray-600">
    <Header />
    <Balance balance={balance} />
    <IncomeExpenseSummary transactions={transactions} />
    <TransactionList
      transactions={transactions}
      onDelete={deleteTransaction}
    />
    <AddTransactionForm onAdd={addTransaction} />
  </div>
</div>
  );
}
