// NOTE This module isn't used anywhere but is provided as a use case example

import resolveConfig from 'tailwindcss/resolveConfig';
import baseTailwindConfig from '@/../tailwind.config';

console.log(typeof baseTailwindConfig); // XXX Exits early unless `Preline` is removed from `plugins` in tailwind.config.ts

export const tailwindScreens = resolveConfig(baseTailwindConfig).theme.screens as Record<
  'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl',
  string
>; // XXX Also exits early
