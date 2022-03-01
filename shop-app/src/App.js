import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";

export default class App extends Component {

  state = {currentCategory:""};

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList info={categoryInfo} 
               changeCategory={this.changeCategory} currentCategory={this.state.currentCategory}/>
            </Col>
            <Col xs="9">
              <ProductList info={productInfo}  currentCategory={this.state.currentCategory} isLoggedIn={true} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
