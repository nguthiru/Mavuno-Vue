import gql from "graphql-tag";

export const TOKEN_AUTH = gql`
mutation token_auth($email:String!,$password:String!) {
  tokenAuth(email:$email,password:$password){
    token
    errors
    user{
      id
      username
      email
      phone
      userFarmRelation{
        farmName
      }
      image
    }
  }
}

`;

export const ME = gql`
query {
  me {
    id
      firstName
      lastName
      email
      phone
      userFarmRelation{
        farmName
      }
      image
  }
}
`;


export const CUSTOMER_BIDS = gql`
query customerBids{
	customerBids{
    id
		produce{
      farm{
        farmName
        city
      }
    imageProduceRelation{
      image
    }
      
    }
    bidPrice
    rejected
    pending
    kilograms
    dateMade

  }
}
`;