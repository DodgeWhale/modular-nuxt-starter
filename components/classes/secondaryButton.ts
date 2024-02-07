import { cva } from 'class-variance-authority';

const secondaryClasses = cva(
  'inline-flex h-10 items-center justify-center rounded-lg border border-black bg-white px-4 text-center text-base font-medium text-black transition-colors hover:bg-neutral-100 focus:ring-2 focus:ring-blue-500',
  {
    variants: {},
  },
);

export default secondaryClasses;
