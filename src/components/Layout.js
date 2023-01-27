import { Outlet } from 'react-router-dom';
import { AppBarComponent } from './AppBar/AppBar';
import { Suspense } from 'react';

import { Box, styled, Typography } from '@mui/material';

const CustomBox = styled(Box)`
  height: 100vh;
  background-image: url(https://pixabay.com/get/gcbb0c7b8b16f251ff89fafc4235898fc673133726ef680027d6ade9b9cfb95ace37b3d23b3d8b05fbf906b971463028415f7d1822c685436fca518e00251c0786aa8fbd8bdaadd6a1f8e378bbb825625_1920.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Layout = () => {
  return (
    <CustomBox>
      <AppBarComponent />
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <Outlet />
      </Suspense>
    </CustomBox>
  );
};
