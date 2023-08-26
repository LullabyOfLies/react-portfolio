import React, { useEffect, useState } from 'react';

const ThemeButton = () => {
  const storageKey = 'theme-preference';

  const [theme, setTheme] = useState(getColorPreference());

  useEffect(() => {
    reflectPreference();
    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, []);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemChange);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleSystemChange);
    };
  }, []);

  const handleSystemChange = ({ matches: isDark }) => {
    setTheme(isDark ? 'dark' : 'light');
    setPreference(isDark ? 'dark' : 'light');
  };

  const onClick = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    setPreference(theme === 'light' ? 'dark' : 'light');
  };

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) {
      return localStorage.getItem(storageKey);
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  };

  const setPreference = (value) => {
    localStorage.setItem(storageKey, value);
    reflectPreference(value);
  };

  const reflectPreference = (value) => {
    document.documentElement.setAttribute('data-theme', value || theme);
    const themeToggle = document.querySelector('#theme-toggle');
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', value || theme);
    }
  };

  return (
    <button className="theme-toggle" id="theme-toggle" title="Toggles light & dark" aria-label={theme} aria-live="polite">
      <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
        {/* SVG content here */}
      </svg>
    </button>
  );
};

export default ThemeButton;
