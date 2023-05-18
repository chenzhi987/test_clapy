import { memo, SVGProps } from 'react';

const PointIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM6 30C6 43.2548 16.7452 54 30 54C43.2548 54 54 43.2548 54 30C54 16.7452 43.2548 6 30 6C16.7452 6 6 16.7452 6 30Z'
      fill='#15CFAC'
      fillOpacity={0.4}
    />
    <circle cx={30} cy={30} r={17.5} fill='#15CFAC' />
  </svg>
);

const Memo = memo(PointIcon);
export { Memo as PointIcon };
