import React, { useEffect, useState } from 'react';
import useStore, { Theme } from '../lib/store';
import { SunnyOutline, MoonOutline, Moon } from 'react-ionicons';
import styled, { css } from 'styled-components';
import { darkTheme, lightTheme } from './Theme';

const IoniconButton = css`
  cursor: pointer;
`;

// const StyledDayModeButton = styled(SunnyOutline)`
//   ${IoniconButton}
// `;

// const StyledNightModeButton = styled(MoonOutline)`
//   ${IoniconButton}
// `

const ThemeToggle = () => {
  const { theme, toggleTheme } = useStore();

  // The theme preference is saved in localstorage which we don't have during
  // SSR, so we wait until useEffect (which runs client side) to display
  // anything that depends on localStorage to avoid rehydration errors
  const [isClientSide, setIsClientside] = useState<boolean>(false);
  useEffect(() => {
    setIsClientside(true);
  }, []);

  return isClientSide ? (
    <>
      {theme === Theme.light ? (
        // <StyledDayModeButton
        <SunnyOutline
          onClick={toggleTheme}
          color={lightTheme.text}
          title='Toggle Light Mode'
          height='36px'
          width='36px'
        />
      ) : (
        // <StyledNightModeButton
        <MoonOutline
          onClick={toggleTheme}
          color={darkTheme.text}
          title='Toggle Dark Mode'
          height='36px'
          width='36px'
        />
      )}
    </>
  ) : (
    <></>
  );
};

export default ThemeToggle;
