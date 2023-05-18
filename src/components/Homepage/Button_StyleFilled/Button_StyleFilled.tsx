import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StyleFilled.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    doSomething?: ReactNode;
  };
}
/* @figmaId 3:477 */
export const Button_StyleFilled: FC<Props> = memo(function Button_StyleFilled(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.doSomething != null ? (
        props.text?.doSomething
      ) : (
        <div className={classes.doSomething}>Do something</div>
      )}
    </button>
  );
});
