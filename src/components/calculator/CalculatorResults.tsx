
import { Card } from "@/components/ui/card";
import { type CalculationResults } from "@/utils/calculations";
import { ProfitChart } from "@/components/ProfitChart";

interface CalculatorResultsProps {
  results: CalculationResults;
  formatCurrency: (value: number) => string;
  formatNumber: (value: number) => string;
}

export const CalculatorResults = ({ results, formatCurrency, formatNumber }: CalculatorResultsProps) => {
  return (
    <div className="mt-8 space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-green-50">
          <h3 className="text-sm font-medium text-green-800">Ganho Bruto Mensal</h3>
          <p className="text-2xl font-bold text-green-600">
            {formatCurrency(results.grossEarnings)}
          </p>
          <p className="text-sm text-green-700 mt-2">
            Meta Diária: {formatCurrency(results.dailyGrossTarget)}
          </p>
        </Card>
        <Card className="p-4 bg-red-50">
          <h3 className="text-sm font-medium text-red-800">Despesas Totais</h3>
          <p className="text-2xl font-bold text-red-600">
            {formatCurrency(results.totalExpenses)}
          </p>
          <div className="mt-2 space-y-1 text-sm">
            <p className="text-red-700">
              Combustível: {formatCurrency(results.fuelExpenses)}
            </p>
            <p className="text-red-700">
              Manutenção: {formatCurrency(results.maintenanceExpenses)}
            </p>
          </div>
        </Card>
        <Card className="p-4 bg-blue-50">
          <h3 className="text-sm font-medium text-blue-800">Lucro Líquido</h3>
          <p className="text-2xl font-bold text-blue-600">
            {formatCurrency(results.netProfit)}
          </p>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4 bg-purple-50">
          <h3 className="text-sm font-medium text-purple-800">
            Horas Necessárias por Dia
          </h3>
          <p className="text-2xl font-bold text-purple-600">
            {formatNumber(results.requiredHoursPerDay)} horas
          </p>
        </Card>
        <Card className="p-4 bg-orange-50">
          <h3 className="text-sm font-medium text-orange-800">
            KM a Percorrer no Mês
          </h3>
          <p className="text-2xl font-bold text-orange-600">
            {formatNumber(results.requiredKmPerMonth)} km
          </p>
        </Card>
      </div>

      <ProfitChart
        grossEarnings={results.grossEarnings}
        totalExpenses={results.totalExpenses}
        netProfit={results.netProfit}
      />
    </div>
  );
};
