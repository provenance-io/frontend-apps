import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Sprite from '../Sprite';

const CopyButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
`;
const CopiedNotice = styled.div`
  background: ${({ theme }) => theme.BLUE_MUTED_DARK};
  color: ${({ theme }) => theme.FONT_WHITE};
  position: absolute;
  padding: 8px;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_NORMAL };
  bottom: -50px;
  left: -8px;
  min-width: 75px;
`;
const Caret = styled(Sprite)`
  position: absolute;
  top: -14px;
`;

const CopyValue = ({ value, className, size, icon, title, iconColor }) => {
  const [justCopied, setJustCopied] = useState(false);
  const [timeoutInstance, setTimeoutInstance] = useState(null);

  // Kill any times when unmounted (prevent memory leaks w/running timers)
  useEffect(
    () => () => {
      timeoutInstance && clearTimeout(timeoutInstance);
    },
    [timeoutInstance]
  );

  const handleCopyClick = () => {
    navigator.clipboard.writeText(value).then(() => {
      clearTimeout(timeoutInstance);
      setJustCopied(true);
      const newTimeoutInstance = setTimeout(() => {
        setJustCopied(false);
      }, 1000);
      setTimeoutInstance(newTimeoutInstance);
    });
  };

  return (
    <CopyButton title={title} onClick={handleCopyClick} className={className}>
      <Sprite size={size} icon={icon} color={iconColor} />
      {justCopied && (
        <CopiedNotice>
          <Caret icon="CARET" size="1.8rem" flipY color="BLUE_MUTED_DARK" />
          Copied!
        </CopiedNotice>
      )}
    </CopyButton>
  );
};

CopyValue.propTypes = {
  value: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  title: PropTypes.string,
};
CopyValue.defaultProps = {
  className: '',
  size: '1.8rem',
  icon: 'REPORTS',
  iconColor: 'POPUP_BACKGROUND',
  title: 'Copy Text',
  value: '',
};

export default CopyValue;
