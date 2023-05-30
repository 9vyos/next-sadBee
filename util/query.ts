export const client = {
  query: {
    getProduct: gql`
      query {
        getProducts {
          id
          name
          price
          description
          category {
            id
            name
            createdAt
            updatedAt
          }
          productImages {
            imageUrl
            isMain
            id
          }
        }
      }
    `,
    getOneProduct: gql`
      query {
        getOneProduct(productId: 41) {
          id
          name
          price
          description
          category {
            id
            name
            createdAt
            updatedAt
          }
          productImages {
            imageUrl
            isMain
            id
          }
        }
      }
    `,
  },
  mutate: {
    login: gql`
      mutation Login($email: String!, $password: String!) {
        login(loginUserRequest: { email: $email, password: $password }) {
          userId
          jwtToken
        }
      }
    `,
    signUp: gql`
      mutation signUp($email: String!, $password: String!, $name: String!) {
        signup(
          createUserRequest: {
            email: $email
            password: $password
            name: $name
            userType: "GUEST"
          }
        ) {
          id
          email
          name
          userType
        }
      }
    `,
    updateProduct: gql`
      mutation UpdateProduct(
        $productId: Float!
        $name: String!
        $price: Float!
        $description: String!
      ) {
        updateProduct(
          productId: $productId
          request: { name: $name, price: $price, description: $description }
        ) {
          id
          name
          price
          description
          category {
            id
            name
            createdAt
            updatedAt
          }
          productImages {
            id
            imageUrl
            isMain
          }
        }
      }
    `,
  },
};
