import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 664' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M717 333C808.955 333 883.5 258.455 883.5 166.5C883.5 74.5446 808.955 0 717 0L0 0.00012207V3.00012L717 3C807.299 3 880.5 76.2014 880.5 166.5C880.5 256.799 807.299 330 717 330H333.5H333V330.001C241.275 330.27 167 404.711 167 496.5C167 588.289 241.275 662.73 333 662.999V663.152H1440V660.152H333.5V660C243.201 660 170 586.799 170 496.5C170 406.201 243.201 333 333.5 333H717Z'
      fill='#15CFAC'
    />
  </svg>
);

const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
