/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct {
    onCreateCartProduct {
      id
      userSub
      quantity
      option
      productId
      product {
        items {
          id
          title
          description
          image
          images
          options
          avgRating
          ratings
          price
          oldPrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct {
    onUpdateCartProduct {
      id
      userSub
      quantity
      option
      productId
      product {
        items {
          id
          title
          description
          image
          images
          options
          avgRating
          ratings
          price
          oldPrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct {
    onDeleteCartProduct {
      id
      userSub
      quantity
      option
      productId
      product {
        items {
          id
          title
          description
          image
          images
          options
          avgRating
          ratings
          price
          oldPrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct {
    onCreateOrderProduct {
      id
      quantity
      option
      productId
      product {
        items {
          id
          title
          description
          image
          images
          options
          avgRating
          ratings
          price
          oldPrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      orderId
      Order {
        items {
          id
          userSub
          fullName
          phoneNumber
          country
          city
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct {
    onUpdateOrderProduct {
      id
      quantity
      option
      productId
      product {
        items {
          id
          title
          description
          image
          images
          options
          avgRating
          ratings
          price
          oldPrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      orderId
      Order {
        items {
          id
          userSub
          fullName
          phoneNumber
          country
          city
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct {
    onDeleteOrderProduct {
      id
      quantity
      option
      productId
      product {
        items {
          id
          title
          description
          image
          images
          options
          avgRating
          ratings
          price
          oldPrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      orderId
      Order {
        items {
          id
          userSub
          fullName
          phoneNumber
          country
          city
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
