import { gql } from '@keystone-6/core/admin-ui/apollo';

export const GET_ALL_FRAMES = gql`
  query {
    frames(where: {}) {
      id
      name
      width
      height
      vertical
      horizontal
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

export const SAVE_PRESALE = gql`
  mutation CreatePresale($frame: ID!, $colors: String!) {
    createPresale(data: { frame: { connect: { id: $frame } }, colors: $colors }) {
      id
    }
  }
`;
