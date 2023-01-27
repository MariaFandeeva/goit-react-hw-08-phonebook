import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const StyledLink = styled(NavLink)`
  color: white;
  &:first-of-type {
    margin-right: 15px;
  }

  &.active {
    color: orange;
  }
`;

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Box>
  );
};
