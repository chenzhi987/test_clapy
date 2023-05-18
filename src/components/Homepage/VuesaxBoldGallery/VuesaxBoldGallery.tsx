import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxBoldGallery.module.css';
import { VuesaxBoldGalleryIcon } from './VuesaxBoldGalleryIcon';

interface Props {
  className?: string;
  swap?: {
    vuesaxBoldGallery?: ReactNode;
  };
}
/* @figmaId 3:4 */
export const VuesaxBoldGallery: FC<Props> = memo(function VuesaxBoldGallery(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vuesaxBoldGallery}>
        {props.swap?.vuesaxBoldGallery || <VuesaxBoldGalleryIcon className={classes.icon} />}
      </div>
    </div>
  );
});
