import { memo, SVGProps } from 'react';

const UnionIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.89277 0.732233C3.91646 -0.244078 2.33354 -0.244078 1.35723 0.732233C0.380922 1.70854 0.380922 3.29146 1.35723 4.26777L15.8925 18.803L1.37612 33.3194C0.399807 34.2957 0.399807 35.8786 1.37612 36.8549C2.35243 37.8312 3.93534 37.8312 4.91165 36.8549L21.2052 20.5614C22.1815 19.5851 22.1815 18.0022 21.2052 17.0259C21.1432 16.9639 21.0788 16.9059 21.0123 16.8518L4.89277 0.732233Z'
      fill='#15CFAC'
    />
  </svg>
);

const Memo = memo(UnionIcon6);
export { Memo as UnionIcon6 };
