import React from 'react';
import { Button } from './button.styles';

interface IButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const StyledButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: IButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default StyledButton;