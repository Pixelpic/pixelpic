import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Content as CommonContent } from '../Constructor.style';

export const Controls = styled(Box)`
  display: flex;
  gap: 24px;
  flex: 0 0 250px;
  align-items: center;
  > * {
    flex: 1 1 auto;
  }
`;

export const Content = styled(CommonContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SourceImage = styled('img')`
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ResultCanvas = styled('canvas')`
  max-width: 100%;
  max-height: 100%;
`;
