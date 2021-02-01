# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\


# part1

Using React, develop a simple shopping cart app that meets the requirements outlined below.

The following components should be included:

* `App`: the application main component.
* `Cart`: The top level cart component, contains the cart total and helps to print out each individual cart item.
* `CartItem`: A component that represents each individual cart item.
* `Item`: A component that represents each of the items for sale.
Items to pre-populate your cart are available at this API endpoint:

* https://5ed0108416017c00165e327c.mockapi.io/api/v1/items


## Requirements:
* Users should be able to add items to the cart
* Users should be able to remove items from their cart
   * If there are multiple similar items in the cart, be sure your app removes only the one that was clicked on
* The total number of items in the cart should be displayed
* The "total number of items" text should not be visible if there are no items in the cart
