import { gql } from '@keystone-6/core/admin-ui/apollo';

export const GET_ALL_FRAMES = gql`
  query {
    frames(where: {}) {
      id
      name
      width
      height
    }
    palettes(where: {}) {
      id
      name
      colors {
        red
        green
        blue
      }
    }
  }
`;
