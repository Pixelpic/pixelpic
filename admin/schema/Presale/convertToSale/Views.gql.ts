import { gql } from '@keystone-6/core/admin-ui/apollo';

export const GET_PRESALE = gql`
  query GetPresale($id: ID!) {
    presale(where: { id: $id }) {
      id
      number
      frame {
        id
        price
      }
      image {
        id
      }
    }
  }
`;

export const CREATE_SALE = gql`
  mutation CreateSale($price: Float!, $frame: ID!, $image: ID!) {
    createSale(
      data: {
        price: $price
        frame: { connect: { id: $frame } }
        image: { connect: { id: $image } }
      }
    ) {
      id
      number
    }
  }
`;

export const DELETE_PRESALE = gql`
  mutation DeletePresale($id: ID!) {
    deletePresale(where: { id: $id }) {
      id
    }
  }
`;
