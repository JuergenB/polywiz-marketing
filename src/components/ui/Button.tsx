import Link from 'next/link';
import clsx from 'clsx';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-lg font-medium focus-visible:outline-2 focus-visible:outline-offset-2 transition-all',
  outline:
    'group inline-flex items-center justify-center rounded-lg border font-medium transition-all',
};

const variantStyles = {
  solid: {
    primary:
      'bg-[#E07A5F] text-white hover:bg-[#C96A51] hover:shadow-[0_4px_16px_rgba(224,122,95,0.20)] active:bg-[#B05A44] focus-visible:outline-[#E07A5F]',
    secondary:
      'bg-[#81B29A] text-white hover:bg-[#6A9A82] active:bg-[#5A8670] focus-visible:outline-[#81B29A]',
    white:
      'bg-white text-[#2D3436] hover:bg-[#F5F3F0] active:bg-[#DFE6E9] focus-visible:outline-white',
  },
  outline: {
    primary:
      'border-[#E07A5F] text-[#E07A5F] hover:bg-[#FEF0EC] active:bg-[#FCD9CF] focus-visible:outline-[#E07A5F]',
    secondary:
      'border-[#81B29A] text-[#81B29A] hover:bg-[#EFF7F3] active:bg-[#D4EAE0] focus-visible:outline-[#81B29A]',
    white:
      'border-[#DFE6E9] text-[#636E72] hover:border-[#E07A5F] hover:text-[#E07A5F] focus-visible:outline-[#E07A5F]',
  },
};

const sizeStyles = {
  sm: 'py-1.5 px-4 text-sm',
  md: 'py-2.5 px-5 text-sm',
  lg: 'py-3 px-6 text-base',
};

type ButtonProps = (
  | { variant?: 'solid'; color?: keyof typeof variantStyles.solid }
  | { variant: 'outline'; color?: keyof typeof variantStyles.outline }
) & {
  size?: keyof typeof sizeStyles;
} & (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & { href?: undefined })
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
