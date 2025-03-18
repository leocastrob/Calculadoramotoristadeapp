
export interface CalculationInputs {
  targetProfit: number
  earningsPerKm: number
  fuelPrice: number
  fuelConsumption: number
  maintenanceCost: number
  kmPerHour: number;
}

export interface CalculationResults {
  grossEarnings: number
  totalExpenses: number
  fuelExpenses: number 
  maintenanceExpenses: number  
  netProfit: number
  requiredHoursPerDay: number
  requiredKmPerMonth: number
  dailyGrossTarget: number
}

export const calculateResults = (inputs: CalculationInputs): CalculationResults => {
  const {
    targetProfit,
    earningsPerKm,
    fuelPrice,
    fuelConsumption,
    maintenanceCost,
    kmPerHour,
  } = inputs;

  
  const fuelCostPerKm = fuelPrice / fuelConsumption;
  const totalCostPerKm = fuelCostPerKm + maintenanceCost; 
  const netEarningPerKm = earningsPerKm - totalCostPerKm;
  const requiredKmPerMonth = targetProfit / netEarningPerKm;

  
  const grossEarnings = requiredKmPerMonth * earningsPerKm;
  const fuelExpenses = requiredKmPerMonth * fuelCostPerKm;
  const maintenanceExpenses = requiredKmPerMonth * maintenanceCost;
  const totalExpenses = fuelExpenses + maintenanceExpenses;

  
  const requiredHours = requiredKmPerMonth / kmPerHour;
  const requiredHoursPerDay = requiredHours / 22; 

  
  const dailyGrossTarget = grossEarnings / 22; 

  return {
    grossEarnings,
    totalExpenses,
    fuelExpenses,
    maintenanceExpenses,
    netProfit: targetProfit,
    requiredHoursPerDay,
    requiredKmPerMonth,
    dailyGrossTarget,
  };
};
