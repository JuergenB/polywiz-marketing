import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[#DFE6E9] bg-white p-6 shadow-[0_4px_12px_rgba(45,52,54,0.08)]',
        hover &&
          'transition-all duration-300 hover:border-[#E07A5F] hover:shadow-[0_12px_32px_rgba(45,52,54,0.10)] hover:-translate-y-1',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
