import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl bg-navy-800 p-6 ring-1 ring-white/10',
        hover && 'transition-all duration-300 hover:ring-white/20',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
