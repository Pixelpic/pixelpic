import { gql } from '@keystone-6/core/admin-ui/apollo';

export const GET_PRESALE = gql`
  query GetPresale($id: ID!) {
    presale(where: { id: $id }) {
      id
      image {
        image {
          id
          publicUrl
        }
      }
    }
  }
`;
