import { memo, SVGProps } from 'react';

const UnionIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.0447 36.8549C18.021 37.8312 19.604 37.8312 20.5803 36.8549C21.5566 35.8786 21.5566 34.2957 20.5803 33.3194L6.04501 18.7841L20.5614 4.26776C21.5377 3.29145 21.5377 1.70854 20.5614 0.732231C19.5851 -0.24408 18.0022 -0.24408 17.0258 0.732231L0.732304 17.0258C-0.244007 18.0021 -0.244007 19.585 0.732304 20.5613C0.794258 20.6233 0.858654 20.6813 0.925182 20.7354L17.0447 36.8549Z'
      fill='#15CFAC'
    />
  </svg>
);

const Memo = memo(UnionIcon3);
export { Memo as UnionIcon3 };
