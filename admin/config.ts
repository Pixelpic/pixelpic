import { AdminConfig } from '@keystone-6/core/types';
import { Logo } from './components/Logo/Logo';
import { Navigation } from './components/Navigation/Navigation';

const components: AdminConfig['components'] = {
  Logo,
  Navigation,
};

export { components };
