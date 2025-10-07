import { useState, useEffect, useCallback } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [operation, setOperation] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const calculate = useCallback((a: number, b: number, op: string): number => {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '×':
        return a * b;
      case '÷':
        return b !== 0 ? a / b : 0;
      default:
        return b;
    }
  }, []);

  const handleNumber = useCallback((num: string) => {
    if (shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(prev => (prev === '0' ? num : prev + num));
    }
  }, [shouldResetDisplay]);

  const handleOperation = useCallback((op: string) => {
    const currentValue = parseFloat(display);
    
    if (previousValue !== null && operation && !shouldResetDisplay) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
      setExpression(`${result} ${op}`);
    } else {
      setPreviousValue(currentValue);
      setExpression(`${currentValue} ${op}`);
    }
    
    setOperation(op);
    setShouldResetDisplay(true);
  }, [display, previousValue, operation, shouldResetDisplay, calculate]);

  const handleEquals = useCallback(() => {
    if (previousValue !== null && operation) {
      const currentValue = parseFloat(display);
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setExpression(`${previousValue} ${operation} ${currentValue} =`);
      setPreviousValue(null);
      setOperation(null);
      setShouldResetDisplay(true);
    }
  }, [previousValue, operation, display, calculate]);

  const handleClear = useCallback(() => {
    setDisplay('0');
    setExpression('');
    setOperation(null);
    setPreviousValue(null);
    setShouldResetDisplay(false);
  }, []);

  const handleDecimal = useCallback(() => {
    if (shouldResetDisplay) {
      setDisplay('0.');
      setShouldResetDisplay(false);
    } else if (!display.includes('.')) {
      setDisplay(prev => prev + '.');
    }
  }, [display, shouldResetDisplay]);

  const handlePercentage = useCallback(() => {
    const value = parseFloat(display) / 100;
    setDisplay(String(value));
  }, [display]);

  const handleNegate = useCallback(() => {
    const value = parseFloat(display) * -1;
    setDisplay(String(value));
  }, [display]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key >= '0' && e.key <= '9') {
      handleNumber(e.key);
    } else if (e.key === '.') {
      handleDecimal();
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
      const opMap: Record<string, string> = { '*': '×', '/': '÷' };
      handleOperation(opMap[e.key] || e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
      e.preventDefault();
      handleEquals();
    } else if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
      handleClear();
    } else if (e.key === 'Backspace') {
      setDisplay(prev => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    }
  }, [handleNumber, handleDecimal, handleOperation, handleEquals, handleClear]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div
      className="w-full max-w-md mx-auto p-8 rounded-3xl border-2 shadow-3d-lg"
      style={{
        background: 'linear-gradient(145deg, #2a2a35 0%, #1f1f28 100%)',
        borderColor: '#3a3a45',
        perspective: '1000px',
        transform: 'rotateX(2deg)',
      }}
    >
      <CalculatorDisplay value={display} expression={expression} />
      
      <div className="grid grid-cols-4 gap-3">
        <CalculatorButton variant="clear" onClick={handleClear}>C</CalculatorButton>
        <CalculatorButton variant="number" onClick={handleNegate}>+/-</CalculatorButton>
        <CalculatorButton variant="number" onClick={handlePercentage}>%</CalculatorButton>
        <CalculatorButton variant="operation" onClick={() => handleOperation('÷')}>÷</CalculatorButton>

        <CalculatorButton variant="number" onClick={() => handleNumber('7')}>7</CalculatorButton>
        <CalculatorButton variant="number" onClick={() => handleNumber('8')}>8</CalculatorButton>
        <CalculatorButton variant="number" onClick={() => handleNumber('9')}>9</CalculatorButton>
        <CalculatorButton variant="operation" onClick={() => handleOperation('×')}>×</CalculatorButton>

        <CalculatorButton variant="number" onClick={() => handleNumber('4')}>4</CalculatorButton>
        <CalculatorButton variant="number" onClick={() => handleNumber('5')}>5</CalculatorButton>
        <CalculatorButton variant="number" onClick={() => handleNumber('6')}>6</CalculatorButton>
        <CalculatorButton variant="operation" onClick={() => handleOperation('-')}>-</CalculatorButton>

        <CalculatorButton variant="number" onClick={() => handleNumber('1')}>1</CalculatorButton>
        <CalculatorButton variant="number" onClick={() => handleNumber('2')}>2</CalculatorButton>
        <CalculatorButton variant="number" onClick={() => handleNumber('3')}>3</CalculatorButton>
        <CalculatorButton variant="operation" onClick={() => handleOperation('+')}>+</CalculatorButton>

        <CalculatorButton variant="number" span={2} onClick={() => handleNumber('0')}>0</CalculatorButton>
        <CalculatorButton variant="number" onClick={handleDecimal}>.</CalculatorButton>
        <CalculatorButton variant="equals" onClick={handleEquals}>=</CalculatorButton>
      </div>
    </div>
  );
}
