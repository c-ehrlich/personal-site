import React from 'react';
import useStore, { Theme } from '../lib/store';
import { SunnyOutline, MoonOutline } from 'react-ionicons';
import styled, { css } from 'styled-components';
import { darkTheme, lightTheme } from './Theme';

const IoniconButton = css`
  cursor: pointer;
`;

const StyledDayModeButton = styled(SunnyOutline)`
  ${IoniconButton}
`;

const StyledNightModeButton = styled(MoonOutline)`
  ${IoniconButton}
`

const ThemeToggle = () => {
  const { theme, toggleTheme } = useStore();

  return (
    <>
      {theme === Theme.light ? (
        <StyledDayModeButton
          onClick={toggleTheme}
          color={lightTheme.text}
          title='Toggle Light Mode'
          height='36px'
          width='36px'
        />
      ) : (
        <StyledNightModeButton
          onClick={toggleTheme}
          color={darkTheme.text}
          title='Toggle Dark Mode'
          height='36px'
          width='36px'
        />
      )}
    </>
  );
};

export default ThemeToggle;
