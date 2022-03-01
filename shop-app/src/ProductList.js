import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    function UserGreeting(props) {
      return <h1>Hoş geldiniz!</h1>;
    }

    function GuestGreeting(props) {
      return <h1>Lütfen kayıt olun</h1>;
    }

    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
    }
    const isLoggedIn = this.props.isLoggedIn;

    function VAlusss(props) {
      const isvass = props.isVal;
      if (isvass) {
        return null;
      }
      return <h1>Null dönmedi kayıt olun</h1>;
    }

    const numbers = [1, 2, 3, 4, 5,6,7,8,9,1,1,1];

    const lists = numbers.map((number)=><li>{number}</li>);

    function GetList(props){

      const nums = props.numbe;

      const list = nums.map((number)=><li key={number.toString()}>{number}</li>);

      return (
        <ul>{list}</ul>
      );
    }

    return (
      <div>
        <h2>Product {this.props.isLoggedIn} </h2>
        <h3>{this.props.currentCategory}</h3>

        {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
        <GuestGreeting />
        <VAlusss isVal={true}/>
        <GetList numbe={numbers}/>
      </div>
    );
  }
}
