import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 84 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 -0.000274658H38.087L84 45.9997' stroke='#37AB95' strokeWidth={2} strokeLinecap='round' />
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
