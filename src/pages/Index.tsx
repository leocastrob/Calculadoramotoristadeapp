
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { calculateResults, type CalculationInputs, type CalculationResults } from "@/utils/calculations";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { CalculatorResults } from "@/components/calculator/CalculatorResults";
import { formatCurrency, formatNumber } from "@/utils/format";

const initialInputs: CalculationInputs = {
  targetProfit: 5000,
  earningsPerKm: 2.5,
  fuelPrice: 5,
  fuelConsumption: 10,
  maintenanceCost: 0.20,
  kmPerHour: 30,
};

const Index = () => {
  const [inputs, setInputs] = useState<CalculationInputs>(initialInputs);
  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (field: keyof CalculationInputs, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [field]: parseFloat(value) || 0,
    }));
  };

  const handleCalculate = () => {
    const results = calculateResults(inputs);
    setResults(results);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Calculadora de Lucro
          </h1>
          <p className="text-lg text-gray-600">
            Para Motoristas de Aplicativo
          </p>
        </div>

        <Card className="p-6 shadow-lg bg-white">
          <CalculatorForm
            inputs={inputs}
            onInputChange={handleInputChange}
          />

          <Button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white transition-all duration-300"
          >
            Calcular
          </Button>

          {results && (
            <CalculatorResults
              results={results}
              formatCurrency={formatCurrency}
              formatNumber={formatNumber}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default Index;
