import Link from 'next/link';
import clsx from 'clsx';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-lg font-semibold transition-colors',
};

const variantStyles = {
  solid: {
    primary:
      'bg-primary-400 text-white hover:bg-primary-300 active:bg-primary-500 focus-visible:outline-primary-400',
    secondary:
      'bg-secondary-400 text-white hover:bg-secondary-300 active:bg-secondary-500 focus-visible:outline-secondary-400',
    white:
      'bg-white text-navy-900 hover:bg-gray-100 active:bg-gray-200 focus-visible:outline-white',
  },
  outline: {
    primary:
      'ring-primary-400/30 text-primary-400 hover:text-primary-300 hover:ring-primary-400/50 active:bg-primary-400/10 focus-visible:outline-primary-400',
    secondary:
      'ring-secondary-400/30 text-secondary-400 hover:text-secondary-300 hover:ring-secondary-400/50 active:bg-secondary-400/10 focus-visible:outline-secondary-400',
    white:
      'ring-white/20 text-white hover:ring-white/40 active:ring-white/30 active:text-gray-300 focus-visible:outline-white',
  },
};

const sizeStyles = {
  sm: 'py-1.5 px-3 text-xs',
  md: 'py-2 px-4 text-sm',
  lg: 'py-3 px-6 text-base',
};

type ButtonProps = (
  | {
      variant?: 'solid';
      color?: keyof typeof variantStyles.solid;
    }
  | {
      variant: 'outline';
      color?: keyof typeof variantStyles.outline;
    }
) & {
  size?: keyof typeof sizeStyles;
} & (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined;
      })
  );

export function Button({ className, size = 'md', ...props }: ButtonProps) {
  props.variant ??= 'solid';
  props.color ??= 'primary';

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color as keyof typeof variantStyles.outline]
      : variantStyles.solid[props.color as keyof typeof variantStyles.solid],
    sizeStyles[size],
    className,
  );

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
