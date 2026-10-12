// Adapted from shadcn/ui's MIT-licensed New York Button; semantic CSS variants.
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonVariants = cva('xp-button', {
  variants: { variant: { default: '', outline: 'xp-button--outline', light: 'xp-button--light' } },
  defaultVariants: { variant: 'default' },
});
const Button = React.forwardRef(({ className, variant, asChild = false, ...props }, ref) => {
  const Component = asChild ? Slot : 'button';
  return <Component className={clsx(buttonVariants({ variant }), className)} ref={ref} {...props} />;
});
Button.displayName = 'Button';
export { Button, buttonVariants };
