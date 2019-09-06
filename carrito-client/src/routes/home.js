import React, { Component } from 'react';
// import gql from 'graphql-tag';
// import { Mutation } from 'react-apollo';

// const ADD_USER = gql`
//     mutation CreateUser(
//         $username: String!,
//         $password: String!,
//         $fullname: String!,
//         $email: String!) {
//         createUser(
//             username: $username,
//             password: $password,
//             fullname: $fullname,
//             email: $email
//         ) {
//             username
//         }
//     }
// `

import styled, {css} from 'styled-components'

const Container = styled.div`
  height: 100vh;
  max-width: 800px;
  margin: auto;
  width: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const Cart = styled.div`
  width: 48%;
  margin-right: 1%;
`
const Input = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  width: 100%;
  padding: 12px 10px;
  font-size: 16px;
  margin-bottom: 20px;
`
const Results = styled.div`
  border-radius: 4px;
  width: 100%;
  background: white;
  height: 413px;
  overflow: auto;
  .empty {
    padding: 130px 40px;
  }
  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #d9d9d9;
    text-align: left;
    .item {
      margin-right: 50px;
    }
    p {
      margin-bottom: 10px;
    }
    strong {
      display: block;
      color: red;
    }
    input {
      width: 80px;
      display: none;
    }
    .add {
      width: 50px;
      height: 50px;
      background: orange;
      border-radius: 50%;
      line-height: 45px;
      color: white;
      font-size: 40px;
      position: relative;
      text-indent: -2px;
      font-weight: 100;
      text-align: center;
      cursor: pointer;
    }
  }
`
const Order = styled.div`
  width: 48%;
  margin-left: 1%;
  margin-bottom: 230px;
`
const DateShipping = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 20px 5px;
    color: gray
  }
`
const OrderList = styled.div`
  background: white;
  padding: 20px 20px 10px 20px;
  margin-bottom: 10px;
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
    padding: 2px 5px;
    .red {
      color: red;
    }
  }
  .shippingCost {
    background: yellow;
  }
`
const Button = styled.button`
  width: 100%;
  background: transparent;
  border: 1px solid #d9d9d9;
  color: gray;
  transition: .25s linear;
  padding: 15px;
  &:hover {
    background: orange;
  }
`

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        result: true,
        initialItems: [
          {
            id: 1,
            name: "Yogurt Laive",
            price: 23.00,
            img: "https://wongfood.vteximg.com.br/arquivos/ids/157542-1000-1000/Yogurt-Bio-Laive-Natural-Botella-946-ml-48256005.jpg?v=636088739514730000"
          },
          {
            id: 2,
            name: "Yogurt Gloria",
            price: 25.00,
            img: "https://plazavea.vteximg.com.br/arquivos/ids/173145-450-450/1000777004.jpg?v=635785248066370000"
          },
          {
            id: 3,
            name: "Yogurt Yoggi",
            price: 30.00,
            img: "https://st2.depositphotos.com/3982569/11948/i/950/depositphotos_119488154-stock-photo-yogurt-1000-grams-container.jpg"
          },
          {
            id: 4,
            name: "Yogurt Laive2",
            price: 23.00,
            img: "https://wongfood.vteximg.com.br/arquivos/ids/157542-1000-1000/Yogurt-Bio-Laive-Natural-Botella-946-ml-48256005.jpg?v=636088739514730000"
          },
          {
            id: 5,
            name: "Yogurt Gloria2",
            price: 25.00,
            img: "https://plazavea.vteximg.com.br/arquivos/ids/173145-450-450/1000777004.jpg?v=635785248066370000"
          },
          {
            id: 6,
            name: "Yogurt Yoggi2",
            price: 30.00,
            img: "https://st2.depositphotos.com/3982569/11948/i/950/depositphotos_119488154-stock-photo-yogurt-1000-grams-container.jpg"
          },
        ],
        items: [],
        products: 0.00,
        total: 0.00
      }
    }

    filterList = (event) => {
      var updateList = this.state.initialItems;
      updateList = updateList.filter(function(item){
        return item.name.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      this.setState({
        result: false,
        items: updateList
      });
      if(event.target.value == ""){
        this.setState({
          result: true
        })
      }
    }
    
    componentWillMount = () => {
      this.setState({ items: this.state.initialItems })
    }

    addRemoveItem = (item) => {
      this.setState({
        products: item.price,
        total: item.price
      })
    }

    render () {
        const {result} = this.state
        const addRemoveItem = this.addRemoveItem
        return (
              <Container className="container df">
                <Cart>
                  <Input 
                    name="search"
                    placeholder="Search Products" 
                    className="inputSearch"
                    onChange={this.filterList}
                  />
                  <Results 
                    className="results"
                    name="results"  
                  >
                    {
                      result
                        ? 
                          <div className="empty">
                            <img width="70" src="https://cdn0.iconfinder.com/data/icons/simple-mix-glyph/160/shopping-cart-512.png" />
                            <h4>Your cart is empty</h4>
                            <p>Seems like you haven't chosen what to buy...</p>
                          </div>
                        :
                          <ul>
                            {this.state.items.map(function(item){
                              return (
                                <li key={item.id}>
                                  <img width="60" src={item.img} />
                                  <div className="item">
                                    <p>{item.name}</p>
                                    <strong>${item.price}.00</strong>
                                  </div>
                                  <button
                                    onClick={() => addRemoveItem(item)}
                                    className="add"
                                    id="add"
                                  >
                                       +
                                  </button>
                                  <input placeholder="cantidad" />
                                </li>
                                )
                            })}
                          </ul>
                      }
                  </Results>
                </Cart>
                <Order>
                  <DateShipping>
                    <img width="30" src="https://cdn4.iconfinder.com/data/icons/proglyphs-traveling/512/Delivery-512.png" />
                    <p> Buy now and get it by</p>
                    <strong>05/24/19</strong>
                  </DateShipping>
                  <OrderList>
                    <ul>
                      <li>
                        <p>Products</p>
                        <p>$<span>{this.state.products}.00</span></p>
                      </li>
                      <li className="shippingCost">
                        <p>Shipping Cost</p>
                        <p>$<span>0.00</span></p>
                      </li>
                      <li>
                        <p>Taxes</p>
                        <p>$<span>0.00</span></p>
                      </li>
                      <li>
                        <p>Total</p>
                        <p className="red">$<span>{this.state.total}.00</span></p>
                      </li>
                    </ul>
                  </OrderList>
                  <Button>
                    COMPLETE ORDER
                  </Button>
                </Order>
              </Container>
        )
    }
}

export default Home;