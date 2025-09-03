// AddTransactionForm.jsx
import { useState } from "react";

export default function AddTransactionForm({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const cleanText = text.trim();
    const value = Number(amount);

    if (!cleanText) return setError("Please enter a description.");
    if (!amount || Number.isNaN(value) || value <= 0)
      return setError("Please enter an amount greater than 0.");

    const signedAmount = type === "expense" ? -value : value;

    const tx = {
      id: crypto.randomUUID(),
      text: cleanText,
      amount: signedAmount,
      type,
      createdAt: Date.now(),
    };

    onAdd(tx);
    setText("");
    setAmount("");
    setType("expense");
  };

  return (
    <section className="mb-6 bg-white dark:bg-gray-700 p-7 rounded-2xl border-2 border-gray-300 dark:border-gray-600 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <h2 className="text-xl font-semibold mb-5 text-gray-900 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-600 pb-3">
        Add Transaction
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <p role="alert" className="text-red-500 dark:text-red-400">
            {error}
          </p>
        )}

        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Description
          </label>
          <input
            className="w-full p-2 border rounded-md 
             text-gray-900 placeholder-gray-400 
             dark:text-gray-100 dark:placeholder-gray-400 
             dark:bg-gray-800 dark:border-gray-600"
            type="text"
            placeholder="e.g. Groceries, Salary"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Amount
          </label>
          <input
            className="w-full p-2 border rounded-md 
             text-gray-900 placeholder-gray-400 
             dark:text-gray-100 dark:placeholder-gray-400 
             dark:bg-gray-800 dark:border-gray-600"
            type="number"
            step="0.01"
            placeholder="e.g. 25.50"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">Type</label>
          <select
            className="p-2 border rounded-md 
             text-gray-900 dark:text-gray-100 
             dark:bg-gray-800 dark:border-gray-600"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="expense">Expense (-)</option>
            <option value="income">Income (+)</option>
          </select>
        </div>

        <button
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition"
          type="submit"
        >
          Add Transaction
        </button>
      </form>
    </section>
  );
}
