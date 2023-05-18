import { memo, SVGProps } from 'react';

const Vector3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 98 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L98 8.56743e-06' stroke='#51C1AC' strokeWidth={2} strokeLinecap='round' />
  </svg>
);

const Memo = memo(Vector3Icon);
export { Memo as Vector3Icon };
