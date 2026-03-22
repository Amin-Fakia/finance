import MonthlyExpensesCard from "./components/MonthlyExpensesCard";
import MonthlyIncomeCard from "./components/MonthlyIncomeCard";
import SavingRateCard from "./components/SavingRateCard";
import TotalBalanceCard from "./components/TotalBalanceCard";

export default function Home() {
  const userName = "Amin"; // This would typically come from your authentication context or API
  const totalBalance = 4100.67; // This would come from your backend API
  const lastMonthBalance = 3100.00; // This would also come from your backend API
  const monthlyIncome = 2315.78;
  const lastMonthIncome = 2312.00;
  
  const incomeChange = ((monthlyIncome - lastMonthIncome) / lastMonthIncome) * 100;
  const balanceChange = ((totalBalance - lastMonthBalance) / lastMonthBalance) * 100;

  return (
    <div className="flex flex-col gap-2 py-6 px-72">
      {/* Account Info */}
      <div className="flex flex-col gap-2">
        <h1 className="text-text-primary text-4xl font-bold">Good Morning, {userName}</h1>
        <span className="text-text-secondary text-lg">Here's a summary of your finances for today.</span>
      </div>

      {/* Summary Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        <TotalBalanceCard balance={totalBalance} change={balanceChange} currency="EUR" locale="de-DE" />
        <MonthlyIncomeCard  balance={monthlyIncome} change={incomeChange} currency="EUR" locale="de-DE" />
        <MonthlyExpensesCard balance={1800.45} change={-5.2} currency="EUR" locale="de-DE" />
        <SavingRateCard percentage={25.4} />
      </section>
     
    </div>
  );
}
