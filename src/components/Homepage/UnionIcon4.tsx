import { memo, SVGProps } from 'react';

const UnionIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 38 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M36.8547 4.26777C37.831 3.29146 37.831 1.70854 36.8547 0.732233C35.8784 -0.244078 34.2955 -0.244078 33.3191 0.732233L18.7839 15.2675L4.26752 0.751118C3.29121 -0.225193 1.7083 -0.225193 0.731987 0.751118C-0.244324 1.72743 -0.244324 3.31034 0.731987 4.28665L17.0255 20.5802C18.0018 21.5565 19.5848 21.5565 20.5611 20.5802C20.623 20.5182 20.681 20.4538 20.7351 20.3873L36.8547 4.26777Z'
      fill='#15CFAC'
    />
  </svg>
);

const Memo = memo(UnionIcon4);
export { Memo as UnionIcon4 };
