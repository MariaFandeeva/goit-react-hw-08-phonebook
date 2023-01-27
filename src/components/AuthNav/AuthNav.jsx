import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: white;
  &:first-of-type {
    margin-right: 15px;
  }

  &.active {
    color: #f4a004;
  }
`;

export const AuthNav = () => {
  return (
    <nav>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </nav>
  );
};
