import React from 'react';
import ThemeToggleStyles from './styles';
import { Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from 'redux/user/reducer';
const ThemeToggle = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSwitch = (bool) => {
    let theme = bool === true ? 'dark' : 'light';
    dispatch(setTheme(theme));
  };
  return (
    <ThemeToggleStyles>
      <Switch checked={user?.theme === 'dark'} onChange={handleSwitch} />
    </ThemeToggleStyles>
  );
};

export default ThemeToggle;
