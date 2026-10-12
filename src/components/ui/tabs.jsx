// Adapted from shadcn/ui's MIT-licensed New York Tabs.
// Semantic CSS classes replace Tailwind utilities to preserve this site's CSS architecture.
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx } from 'clsx';

const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={clsx('ui-tabs-list', className)} {...props} />
));
TabsList.displayName = 'TabsList';
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={clsx('ui-tabs-trigger', className)} {...props} />
));
TabsTrigger.displayName = 'TabsTrigger';
const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={clsx('ui-tabs-content', className)} {...props} />
));
TabsContent.displayName = 'TabsContent';
export { Tabs, TabsList, TabsTrigger, TabsContent };
