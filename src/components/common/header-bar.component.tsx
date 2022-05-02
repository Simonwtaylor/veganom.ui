import React from 'react';

import StyledButton from './button.component';
import { Header } from './header.styles';

type User = {
  name: string;
};

interface IHeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const StyledHeader = ({ user, onLogin, onLogout, onCreateAccount }: IHeaderProps) => (
  <Header>
      <div className="wrapper">
        <div>
          <h1>🥦 Veganom</h1>
        </div>
        <div>
          {user ? (
            <>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <StyledButton size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <StyledButton size="small" onClick={onLogin} label="Log in" />
              <StyledButton primary size="small" onClick={onCreateAccount} label="Sign up" />
            </>
          )}
        </div>
      </div>
  </Header>
);

export default StyledHeader;
