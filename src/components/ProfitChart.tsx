
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface ProfitChartProps {
  grossEarnings: number;
  totalExpenses: number;
  netProfit: number;
}

export const ProfitChart = ({ grossEarnings, totalExpenses, netProfit }: ProfitChartProps) => {
  const data = [
    {
      name: "Ganho Bruto",
      value: grossEarnings,
      fill: "#4ade80",
    },
    {
      name: "Despesas",
      value: totalExpenses,
      fill: "#f87171",
    },
    {
      name: "Lucro Líquido",
      value: netProfit,
      fill: "#60a5fa",
    },
  ];

  return (
    <div className="w-full h-[300px] mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
            }}
          />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
