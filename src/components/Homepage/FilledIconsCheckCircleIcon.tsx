import { memo, SVGProps } from 'react';

const FilledIconsCheckCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_194_900)'>
      <path
        d='M8 16C12.4184 16 16 12.4184 16 8C16 3.5816 12.4184 0 8 0C3.5816 0 0 3.5816 0 8C0 12.4184 3.5816 16 8 16Z'
        fill='#15CFAC'
      />
      <path
        d='M4.37958 8.5172L6.44839 10.586L11.6204 5.41399'
        stroke='white'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_194_900'>
        <rect width={16} height={16} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FilledIconsCheckCircleIcon);
export { Memo as FilledIconsCheckCircleIcon };
