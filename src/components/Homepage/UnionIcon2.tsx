import { memo, SVGProps } from 'react';

const UnionIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.61152 1.07598C3.63521 0.0996723 2.05229 0.0996723 1.07598 1.07598C0.0996723 2.05229 0.0996723 3.63521 1.07598 4.61152L15.6112 19.1468L1.09487 33.6631C0.118557 34.6395 0.118557 36.2224 1.09487 37.1987C2.07118 38.175 3.65409 38.175 4.6304 37.1987L20.9239 20.9051C21.9003 19.9288 21.9003 18.3459 20.9239 17.3696C20.862 17.3076 20.7976 17.2496 20.7311 17.1955L4.61152 1.07598Z'
      fill='#15CFAC'
    />
  </svg>
);

const Memo = memo(UnionIcon2);
export { Memo as UnionIcon2 };
