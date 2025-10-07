import { cn } from '@/lib/utils';

interface CalculatorDisplayProps {
  value: string;
  expression?: string;
  className?: string;
}

export default function CalculatorDisplay({ value, expression, className }: CalculatorDisplayProps) {
  return (
    <div
      data-testid="display-calculator"
      className={cn(
        'relative rounded-2xl p-6 mb-6',
        'bg-[#1a1a24] border-2 border-[#2a2a35]',
        'shadow-inset-3d',
        'backdrop-blur-sm',
        className
      )}
      style={{
        background: 'linear-gradient(145deg, #1a1a24 0%, #15151f 100%)',
      }}
    >
      {expression && (
        <div 
          data-testid="text-expression"
          className="text-sm text-muted-foreground font-display mb-2 text-right opacity-60 h-5 overflow-hidden text-ellipsis"
        >
          {expression}
        </div>
      )}
      <div 
        data-testid="text-result"
        className="text-4xl md:text-5xl text-white font-display font-semibold text-right leading-tight overflow-hidden text-ellipsis"
      >
        {value || '0'}
      </div>
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/20 to-transparent rounded-t-2xl pointer-events-none" />
    </div>
  );
}
