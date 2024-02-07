import { cva } from 'class-variance-authority';

const primaryClasses = cva(
  'inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-black px-8 text-center text-base font-medium text-white ring-offset-2 transition-colors hover:bg-neutral-900 focus:ring-2 focus:ring-black active:bg-neutral-700 focus:active:ring-neutral-700',
  {
    variants: {},
  },
);

export default primaryClasses;
