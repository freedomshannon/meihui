import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { tv } from 'tailwind-variants';

// 按钮样式变体
const buttonVariants = tv({
  base: 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      primary: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900',
      secondary: 'bg-gray-100 border border-gray-300 text-slate-900 hover:bg-gray-200 focus:ring-slate-900',
      outline: 'border border-gray-300 text-slate-900 hover:bg-gray-50 focus:ring-slate-900',
      ghost: 'text-slate-900 hover:bg-gray-100 focus:ring-slate-900',
      link: 'text-slate-900 underline-offset-4 hover:underline focus:ring-slate-900',
    },
    size: {
      xs: 'h-8 px-3 text-xs',
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-11 px-8 text-base',
      xl: 'h-12 px-10 text-base',
      icon: 'h-10 w-10',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
  },
});

// Button组件
const Button = forwardRef(({
  className,
  variant,
  size,
  fullWidth,
  asChild = false,
  children,
  ...props
}, ref) => {
  const Component = asChild ? 'span' : 'button';

  return (
    <Component
      className={clsx(buttonVariants({ variant, size, fullWidth }), className)}
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants };
