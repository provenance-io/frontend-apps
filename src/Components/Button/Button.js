import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sprite from 'Components/Sprite';

const StyledButton = styled.button`
  text-align: left;
  display: flex;
  ${({ width }) => width && `flex-basis: ${width};` }
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.BUTTON_FONT};
  border-radius: 4px;
  font-size: 1.4rem;
  padding: 14px 20px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer' };
  letter-spacing: 0.07rem;
  font-family: ${({ theme }) => theme.PRIMARY_FONT_FAMILY };
  transition: 250ms all linear;
  user-select: none;
  /* PRIMARY VS SECONDARY BUTTON VS OTHER COLOR (SECONDARY IS JUST AN OUTLINE) */
  ${({ theme, color }) => {
    switch(color) {
      case 'PRIMARY':
        return `
          border: none;
          background: ${theme.BUTTON_BACKGROUND}};
          color: ${theme.BUTTON_FONT_PRIMARY};
          &:focus { background: ${theme.BUTTON_FOCUS}; }
          &:hover { background: ${theme.BUTTON_HOVER}; }
          &:active {background: ${theme.BUTTON_ACTIVE}; }
          &:disabled {
            background: ${theme.BUTTON_DISABLED}};
            color: ${theme.BUTTON_FONT_PRIMARY_DISABLED };
          }
        `;
      case 'SECONDARY':
        return `
          border: 1px solid ${theme.BUTTON_BORDER}};
          background: ${theme.TRANSPARENT};
          color: ${theme.BUTTON_FONT_SECONDARY};
          &:focus { border-color: ${theme.BUTTON_FOCUS}; }
          &:hover { border-color: ${theme.BUTTON_HOVER}; }
          &:active { border-color: ${theme.BUTTON_ACTIVE}; }
          &:disabled {
            border-color: ${theme.BUTTON_DISABLED };
            color: ${theme.BUTTON_FONT_SECONDARY_DISABLED };
          }
        `;
      default: return `
          border: none;
          background: ${theme[color]}};
          &:focus { background: ${theme[`${color}_DARK`]} }; }
          &:hover { background: ${theme[`${color}_DARK`]} }; }
          &:active {background: ${theme[`${color}_DARK`]} }; }
          &:disabled {
            border-color: ${theme.BUTTON_DISABLED };
            color: ${theme.BUTTON_FONT_PRIMARY_DISABLED };
          }
      `;
    }
  }}
`;
const ButtonContent = styled.div`
  font-size: 1.4rem;
`;
const ButtonIcon = styled.div`
  margin-left: 10px;
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
      <ButtonContent>{children}</ButtonContent>
      {icon && (
        <ButtonIcon>
          <Sprite {...iconOptions} icon={icon} size={iconSize} color={iconColor} />
        </ButtonIcon>
      )}
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
