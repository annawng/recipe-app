import { useContext } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { IoMoon } from 'react-icons/io5';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

function NavBar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const ToggleWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2rem;

    svg,
    .react-toggle-track-check,
    .react-toggle-track-x {
      width: 14px;
      height: 14px;
    }

    .react-toggle-thumb {
      width: 18px;
      height: 18px;
      top: 0;
      bottom: 0;
      margin-block: auto;
      border: none;
      background-color: var(--surface);
      left: 5px;
    }

    .react-toggle--checked .react-toggle-thumb {
      left: auto;
      right: 5px;
      background-color: transparent;
    }

    .react-toggle-track-check {
      right: 7px;
      color: var(--on-background);
      z-index: 1;
    }

    .react-toggle-track-x {
      left: 7px;
      color: var(--on-surface-lighter);
    }

    .react-toggle-track,
    .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
      color: var(--primary);
      background-color: var(--on-surface-lighter);
      box-shadow: var(--1dp-shadow);
    }

    .react-toggle--checked .react-toggle-track,
    .react-toggle--checked:hover:not(.react-toggle--disabled)
      .react-toggle-track {
      background-color: var(--surface-1);
    }
  `;

  return (
    <div>
      <ToggleWrapper>
        <Toggle
          defaultChecked={darkMode}
          icons={{
            checked: <IoMoon />,
            unchecked: null,
          }}
          onChange={toggleDarkMode}
        />
      </ToggleWrapper>
    </div>
  );
}

export default NavBar;
