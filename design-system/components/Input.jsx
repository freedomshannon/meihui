import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { tv } from 'tailwind-variants';

// 输入框样式变体
const inputVariants = tv({
  base: 'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: {
      default: '',
      error: 'border-red-500 focus-visible:ring-red-500',
      success: 'border-green-500 focus-visible:ring-green-500',
    },
    size: {
      sm: 'h-8 px-2 text-xs',
      md: 'h-10 px-3 text-sm',
      lg: 'h-12 px-4 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

// Input组件
const Input = forwardRef(({
  className,
  type = 'text',
  variant,
  size,
  ...props
}, ref) => {
  return (
    <input
      type={type}
      className={clsx(inputVariants({ variant, size }), className)}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

// Textarea组件
const Textarea = forwardRef(({
  className,
  variant,
  size,
  ...props
}, ref) => {
  return (
    <textarea
      className={clsx(
        inputVariants({ variant, size }),
        'min-h-[80px] resize-none',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export { Input, Textarea, inputVariants };
