import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {

  state = {
      categories: [
        { categoryId: 1, categoryName: "Kalem" },
        { categoryId: 2, categoryName: "Defter" }
      ]
  };

  render() {
    return (
      <div>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem onClick={()=>this.props.changeCategory(category)} key={category.categoryId}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h3>{this.props.currentCategory}</h3>
      </div>
    );
  }
}
