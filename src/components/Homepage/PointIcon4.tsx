import { memo, SVGProps } from 'react';

const PointIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 61 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M60.5 30C60.5 46.5685 47.0685 60 30.5 60C13.9315 60 0.5 46.5685 0.5 30C0.5 13.4315 13.9315 0 30.5 0C47.0685 0 60.5 13.4315 60.5 30ZM6.5 30C6.5 43.2548 17.2452 54 30.5 54C43.7548 54 54.5 43.2548 54.5 30C54.5 16.7452 43.7548 6 30.5 6C17.2452 6 6.5 16.7452 6.5 30Z'
      fill='#15CFAC'
      fillOpacity={0.4}
    />
    <circle cx={30.5} cy={30} r={17.5} fill='#15CFAC' />
  </svg>
);

const Memo = memo(PointIcon4);
export { Memo as PointIcon4 };
