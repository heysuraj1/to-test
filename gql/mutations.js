import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        blocked
        confirmed
        email
        id
        username

        role {
          name
          description
          type
          id
        }
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation Register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        blocked
        confirmed
        email
        id
        role {
          description
          id
          type
          name
        }
      }
    }
  }
`;
