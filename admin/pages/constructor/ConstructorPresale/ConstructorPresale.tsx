import React, { FC, useContext } from 'react';
import { Link } from '@keystone-6/core/admin-ui/router';
import { Card, Typography, Button } from '@mui/material';
import { Share } from '@mui/icons-material';
import { Section, Content } from '../Constructor.style';
import { Container } from './ConstructorPresale.style';
import { ConstructorContext } from '../Constructor.context';

export const ConstructorPresale: FC = () => {
  const { presale } = useContext(ConstructorContext);

  return (
    <Section>
      <Content>
        <Card variant="outlined">
          <Container>
            <Share fontSize="large" color="primary" />
            <Typography variant="caption" align="center">
              Image had been saved as presale. Use 'Share' to share it with the client
            </Typography>
            <Link href="/" target="">
              <Button variant="contained" disableElevation>
                Share
              </Button>
            </Link>
          </Container>
        </Card>
      </Content>
    </Section>
  );
};
