import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h2>Product</h2>
        <h3>{this.props.currentCategory}</h3>
      </div>
    )
  }
}
