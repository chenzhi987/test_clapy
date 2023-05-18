import { memo, SVGProps } from 'react';

const SocialMediaIconSquareFacebookI = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={36} height={36} rx={8} fill='#28E1BE' fillOpacity={0.3} />
    <path
      d='M19.4638 27V18.7894H22.3585L22.7919 15.5895H19.4638V13.5465C19.4638 12.6201 19.7339 11.9888 21.1294 11.9888L22.9091 11.988V9.12607C22.6013 9.08714 21.5447 9 20.3158 9C17.7497 9 15.993 10.4912 15.993 13.2297V15.5895H13.0909V18.7894H15.993V26.9999H19.4638V27Z'
      fill='#15CFAC'
    />
  </svg>
);

const Memo = memo(SocialMediaIconSquareFacebookI);
export { Memo as SocialMediaIconSquareFacebookI };
