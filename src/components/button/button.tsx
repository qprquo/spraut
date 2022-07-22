import React from 'react';
import clsx from 'clsx';
import style from './button.module.scss';

type THtmlTypes = 'button' | 'submit' | 'reset';

type TSize = 'default' | 'fixed';

type TButtonProps = {
  className?: string;
  children: React.ReactNode;
  htmlType?: THtmlTypes;
  size?: TSize;
  outline?: boolean;
};

const Button = ({
  className,
  children,
  size = 'default',
  htmlType = 'button',
  outline = false
}: TButtonProps) => {
  const classes = clsx(style['button'], style[size], outline && style['outline'], className);
  return (
    <button
      type={htmlType}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
