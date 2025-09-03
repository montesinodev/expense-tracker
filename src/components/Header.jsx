// Header.jsx
import DarkModeToggle from "./DarkModeToggle"; // Make sure to import this

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
        Expense Tracker
      </h1>
      <DarkModeToggle /> {/* Use the DarkModeToggle component */}
    </header>
  );
}