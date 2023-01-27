import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <CustomBox>
      <Typography
        color="lightblue"
        component="h1"
        variant="h3"
        sx={{ mt: '50px', fontWeight: '500' }}
      >
        Stay in contact
      </Typography>
      <Button
        variant={'outlined'}
        type="submit"
        onClick={() => navigate('register')}
      >
        Join now
      </Button>
    </CustomBox>
  );
};
export default Home;
