import { memo, SVGProps } from 'react';

const Vector2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 189 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H189' stroke='#7CE4D2' strokeWidth={2} strokeLinecap='round' />
  </svg>
);

const Memo = memo(Vector2Icon);
export { Memo as Vector2Icon };
