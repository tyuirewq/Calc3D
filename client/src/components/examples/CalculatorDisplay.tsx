import CalculatorDisplay from '../CalculatorDisplay';

export default function CalculatorDisplayExample() {
  return (
    <div className="p-8 bg-background">
      <CalculatorDisplay 
        value="42,857.50" 
        expression="300 × 142.858"
      />
      <div className="mt-4">
        <CalculatorDisplay value="0" />
      </div>
    </div>
  );
}
