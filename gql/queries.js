import {gql} from '@apollo/client'


export const GET_ALL_PRODUCTS = gql`
query Amcs {
    amcs {
      data {
        id
        attributes {
          AMCName
          AMCDescription
          AMCPeriod
          Price
        
        }
      }
    }
  }



`



export const GET_PRODUCT = gql`

query Amc($amcId: ID) {
  amc(id: $amcId) {
    data {
      id
      attributes {
        AMCName
        AMCDescription
        AMCPeriod
        Price
        
      }
    }
  }
}




`

export const GET_SERVICE = gql`

query Services {
  services {
    data {
      attributes {
        Service_Name
        Service_Description
      }
    }
  }
}





`


export const GET_CLIENT_REVIEW = gql`

query Reviews {
  reviews {
    data {
      attributes {
        Name
        Comment_Description
        Stars
      }
    }
  }
}



`