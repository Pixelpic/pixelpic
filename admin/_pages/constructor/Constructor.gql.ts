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
        RGB
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
  mutation SaveImage($image: Upload!, $name: String!) {
    createImage(data: { image: $image, name: $name }) {
      id
    }
  }
`;
