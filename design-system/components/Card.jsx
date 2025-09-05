import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { tv } from 'tailwind-variants';

// 卡片样式变体
const cardVariants = tv({
  base: 'rounded-lg border bg-white text-slate-900 shadow-sm',
  variants: {
    variant: {
      default: 'border-gray-200',
      elevated: 'border-gray-200 shadow-lg',
      outlined: 'border-gray-300 bg-transparent',
      filled: 'border-transparent bg-gray-50',
    },
    padding: {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
  },
});

// Card组件
const Card = forwardRef(({
  className,
  variant,
  padding,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(cardVariants({ variant, padding }), className)}
      {...props}
    />
  );
});

Card.displayName = 'Card';

// CardHeader组件
const CardHeader = forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  );
});

CardHeader.displayName = 'CardHeader';

// CardTitle组件
const CardTitle = forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <h3
      ref={ref}
      className={clsx('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  );
});

CardTitle.displayName = 'CardTitle';

// CardDescription组件
const CardDescription = forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <p
      ref={ref}
      className={clsx('text-sm text-text-secondary', className)}
      {...props}
    />
  );
});

CardDescription.displayName = 'CardDescription';

// CardContent组件
const CardContent = forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('p-6 pt-0', className)}
      {...props}
    />
  );
});

CardContent.displayName = 'CardContent';

// CardFooter组件
const CardFooter = forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('flex items-center p-6 pt-0', className)}
      {...props}
    />
  );
});

CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants
};
