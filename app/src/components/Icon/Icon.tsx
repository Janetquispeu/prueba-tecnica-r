import React from 'react';
import { Props } from './model';
import { IconWrapper } from './styled';

export const Icon: React.FC<Props> = ({
  icon,
  fill,
  size,
  className,
  height,
  width
}) => {
  const routeSplit = icon.split('/');
  const iconName = routeSplit[routeSplit.length - 1].split('.')[0];

  return (
    <IconWrapper className={className} data-fill={fill} data-size={size} data-height={height} data-width={width}>
      <svg className={`icon ${iconName}`}>
        <use xlinkHref={`${icon}#${iconName}`} />
      </svg>
    </IconWrapper>
  );
};
