import React from 'react';
import './App.css';
import Item from './components/Item';
import Cart from './components/Cart';
import CartItem from './components/CartItem';

class App extends React.Component {

  state = {
    items: [],
    selectedItem: [
      // {
      //   name: '123',
      //   price: '456',
      // },
    ],
  }

  async componentDidMount() {
    const response = await fetch(`https://5ed0108416017c00165e327c.mockapi.io/api/v1/items`);
    const data = await response.json();
    // console.log(data);
    this.setState({
      items: data
    });
    // console.log(this.state.items)
  }



  handleSubmit = (name, price) => {
    console.log(name, price, "submit");
    this.setState(prevState => ({
      selectedItem: [...prevState.selectedItem, { name: name, price: price }]
    }))
  };

  handleRemove = (item) => {
    // console.log(item);
    this.setState(prevState=>({
      selectedItem: prevState.selectedItem.filter(itemElement => itemElement !== item)
    }))
  };


  render() {
    console.log(this.state.selectedItem)

    const { items, selectedItem } = this.state;

    return (
      <>
        <div>
          <header><h1>mouseHeav3an</h1></header>
        </div>
        <main>
          <Item
            items={items}
            click={this.handleSubmit}
          />
          <aside class="cart">
            <h2>Your Cart</h2>
            <CartItem 
              add={selectedItem}
              remove={this.handleRemove}
            />
            <Cart total={selectedItem}/>
          </aside>
        </main>
      </>
    )
  }
}


export default App;
