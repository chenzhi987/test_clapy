import { memo, SVGProps } from 'react';

const FigpieIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 560 560' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M280 280L177.513 102.487C275.551 45.885 400.911 79.4751 457.513 177.513C490.319 234.335 493.94 303.429 467.253 363.37L280 280Z'
      fill='#18917A'
      stroke='white'
      strokeLinejoin='round'
    />
    <path
      d='M280 280L467.253 363.371C431.134 444.493 346.888 493.133 258.574 483.851L280 280Z'
      fill='#7CE4D2'
      stroke='white'
      strokeLinejoin='round'
    />
    <path
      d='M280 280L258.575 483.851C193.321 476.993 135.294 439.31 102.487 382.487L280 280Z'
      fill='#65D1BD'
      stroke='white'
      strokeLinejoin='round'
    />
    <path
      d='M280 280L102.487 382.487C80.8443 345 71.6244 301.623 76.149 258.574L280 280Z'
      fill='#51C1AC'
      stroke='white'
      strokeLinejoin='round'
    />
    <path
      d='M280 280L76.1488 258.574C83.0073 193.321 120.69 135.294 177.513 102.487L280 280Z'
      fill='#37AB95'
      stroke='white'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(FigpieIcon);
export { Memo as FigpieIcon };
