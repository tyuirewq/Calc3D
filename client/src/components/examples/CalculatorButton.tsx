import CalculatorButton from '../CalculatorButton';

export default function CalculatorButtonExample() {
  return (
    <div className="grid grid-cols-4 gap-3 p-8 bg-background">
      <CalculatorButton variant="number">7</CalculatorButton>
      <CalculatorButton variant="number">8</CalculatorButton>
      <CalculatorButton variant="number">9</CalculatorButton>
      <CalculatorButton variant="operation">÷</CalculatorButton>
      
      <CalculatorButton variant="clear">C</CalculatorButton>
      <CalculatorButton variant="operation">×</CalculatorButton>
      <CalculatorButton variant="equals" span={2}>=</CalculatorButton>
    </div>
  );
}
