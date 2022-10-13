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
  mutation CreatePresale($frame: ID!, $image: ID!) {
    createPresale(
      data: { frame: { connect: { id: $frame } }, image: { connect: { id: $image } } }
    ) {
      id
    }
  }
`;

export const SAVE_IMAGE = gql`
  mutation SaveImage($image: Upload!) {
    createImage(data: { image: $image }) {
      id
    }
  }
`;
