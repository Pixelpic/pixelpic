import { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { Box, Stepper as MuiStepper } from '@mui/material';
import { PageContainer } from '@keystone-6/core/admin-ui/components';

export const Root = styled(PageContainer)``;

export const Stepper = styled(MuiStepper)`
  flex: 0 0 auto;
`;

export const Container = styled(Box)`
  padding: 24px 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Section = styled(Box)`
  padding-top: 24px;
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Content = styled(Box)`
  flex: 1 1 auto;
  overflow: hidden;
`;

export const Footer = styled(Box)<{ justify?: CSSProperties['justifyContent'] }>`
  padding-top: 24px;
  flex: 0 0 auto;
  display: flex;
  justify-content: ${({ justify = 'flex-end' }) => justify};
  gap: 48px;
`;
