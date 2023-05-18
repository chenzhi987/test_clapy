import { memo, SVGProps } from 'react';

const UnionIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.26777 0.732233C3.29146 -0.244078 1.70854 -0.244078 0.732233 0.732233C-0.244078 1.70854 -0.244078 3.29146 0.732233 4.26777L15.2675 18.803L0.751118 33.3194C-0.225193 34.2957 -0.225193 35.8786 0.751118 36.8549C1.72743 37.8312 3.31034 37.8312 4.28665 36.8549L20.5802 20.5614C21.5565 19.5851 21.5565 18.0022 20.5802 17.0259C20.5182 16.9639 20.4538 16.9059 20.3873 16.8518L4.26777 0.732233Z'
      fill='#15CFAC'
    />
  </svg>
);

const Memo = memo(UnionIcon5);
export { Memo as UnionIcon5 };
