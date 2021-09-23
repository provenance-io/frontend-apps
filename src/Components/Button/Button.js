import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sprite from 'Components/Sprite';

const StyledButton = styled.button`
  ${({ width }) => width && `flex-basis: ${width};` }
  align-items: center;
  color: ${({ theme }) => theme.BUTTON_COLOR };
  background: ${({ theme }) => theme.BUTTON_BG };
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.BUTTON_BORDER };
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer' };
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  letter-spacing: 0.07rem;
  padding: 14px 20px;
  transition: 250ms all;
  user-select: none;
  &:hover {
    background: ${({ theme }) => theme.BUTTON_HOVER };
    border: 1px solid ${({ theme }) => theme.BUTTON_BORDER_HOVER };
  }
`;
const ButtonContent = styled.div`
  font-size: 1.4rem;
`;
const ButtonIcon = styled.div`
  margin-right: 10px;
  display: flex;
`;

const Button = ({ className, color, icon, iconSize, iconColor, iconOptions, onClick, children, disabled, width, title }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  }

  return (
    <StyledButton
      title={title}
      className={className}
      onClick={handleClick}
      color={color.toUpperCase()}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          handleClick();
        }
      }}
      disabled={disabled}
      width={width}
    >
      {icon && (
        <ButtonIcon>
          <Sprite {...iconOptions} icon={icon} size={iconSize} color={iconColor} />
        </ButtonIcon>
      )}
      <ButtonContent>{children}</ButtonContent>
    </StyledButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.string,
  iconColor: PropTypes.string,
  iconOptions: PropTypes.object, // see Components/Sprite for available options
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  title: PropTypes.string,
};
Button.defaultProps = {
  className: '',
  color: 'primary',
  icon: '',
  iconSize: '2.2rem',
  iconColor: 'ICON_WHITE',
  iconOptions: null,
  onClick: () => {},
  disabled: false,
  width: '',
  title: '',
};

export default Button;
