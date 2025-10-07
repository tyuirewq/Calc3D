import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CalculatorButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'number' | 'operation' | 'equals' | 'clear';
  span?: number;
}

const CalculatorButton = forwardRef<HTMLButtonElement, CalculatorButtonProps>(
  ({ className, variant = 'number', span = 1, children, ...props }, ref) => {
    const variantClasses = {
      number: 'bg-[#3a3a45] text-white border-[#2a2a35] hover:bg-[#454550] shadow-3d',
      operation: 'bg-primary text-primary-foreground border-primary-border shadow-3d',
      equals: 'bg-[#3cb371] text-white border-[#2ca361] shadow-3d-lg',
      clear: 'bg-destructive text-destructive-foreground border-destructive-border shadow-3d',
    };

    return (
      <button
        ref={ref}
        data-testid={`button-${typeof children === 'string' ? children.toLowerCase().replace(/[^a-z0-9]/g, '') : 'calc'}`}
        className={cn(
          'relative rounded-xl font-display text-xl font-semibold border-2 transition-all duration-150',
          'min-h-16 active:translate-y-1 active:shadow-inset-3d active:scale-98',
          'hover:-translate-y-0.5 hover:shadow-3d-lg',
          'transform-gpu will-change-transform',
          span === 2 && 'col-span-2',
          variantClasses[variant],
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

CalculatorButton.displayName = 'CalculatorButton';

export default CalculatorButton;
