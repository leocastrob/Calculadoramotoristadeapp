
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type CalculationInputs } from "@/utils/calculations";

interface CalculatorFormProps {
  inputs: CalculationInputs;
  onInputChange: (field: keyof CalculationInputs, value: string) => void;
}

export const CalculatorForm = ({ inputs, onInputChange }: CalculatorFormProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="targetProfit">Meta de Lucro Líquido Mensal</Label>
          <Input
            id="targetProfit"
            type="number"
            value={inputs.targetProfit}
            onChange={(e) => onInputChange("targetProfit", e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="earningsPerKm">Ganho por KM (R$)</Label>
          <Input
            id="earningsPerKm"
            type="number"
            step="0.1"
            value={inputs.earningsPerKm}
            onChange={(e) => onInputChange("earningsPerKm", e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="fuelPrice">Preço do Combustível (R$)</Label>
          <Input
            id="fuelPrice"
            type="number"
            step="0.1"
            value={inputs.fuelPrice}
            onChange={(e) => onInputChange("fuelPrice", e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="fuelConsumption">Consumo do Carro (km/l)</Label>
          <Input
            id="fuelConsumption"
            type="number"
            step="0.1"
            value={inputs.fuelConsumption}
            onChange={(e) => onInputChange("fuelConsumption", e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="maintenanceCost">Custo de Manutenção por KM (R$)</Label>
          <Input
            id="maintenanceCost"
            type="number"
            step="0.01"
            value={inputs.maintenanceCost}
            onChange={(e) => onInputChange("maintenanceCost", e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="kmPerHour">KM Rodados por Hora</Label>
          <Input
            id="kmPerHour"
            type="number"
            value={inputs.kmPerHour}
            onChange={(e) => onInputChange("kmPerHour", e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
};
