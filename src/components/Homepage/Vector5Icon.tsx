import { memo, SVGProps } from 'react';

const Vector5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 109 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 -0.000274658L109 -0.000265129' stroke='#18917A' strokeWidth={2} strokeLinecap='round' />
  </svg>
);

const Memo = memo(Vector5Icon);
export { Memo as Vector5Icon };
