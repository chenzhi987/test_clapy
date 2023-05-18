import { memo, SVGProps } from 'react';

const DotNavigationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 66 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={7} cy={7.84842} r={7} fill='#15CFAC' />
    <circle cx={33} cy={7.84842} r={7} fill='#15CFAC' />
    <circle cx={59} cy={7.84842} r={7} fill='#15CFAC' />
  </svg>
);

const Memo = memo(DotNavigationIcon);
export { Memo as DotNavigationIcon };
