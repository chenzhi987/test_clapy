import { memo, SVGProps } from 'react';

const Vector4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 157 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L157 -1.37254e-05' stroke='#7CE4D2' strokeWidth={2} strokeLinecap='round' />
  </svg>
);

const Memo = memo(Vector4Icon);
export { Memo as Vector4Icon };
