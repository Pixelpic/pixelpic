import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Controls = styled(Box)`
  display: flex;
  gap: 24px;
  flex: 0 0 500px;
  align-items: center;
  > * {
    flex: 1 0 50%;
  }
`;
