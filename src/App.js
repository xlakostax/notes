import React, { Component } from 'react';
import bulma from 'bulma';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(event) {
    let list = this.state.list;
    const newItem = document.getElementById('addInput');
    const form = document.getElementById('addItemForm');
    if (newItem.value !== ''){
      list.push(newItem.value);
      this.setState({
        list: list,
      });
      form.reset();
    } else {
      newItem.classList.add('is-danger');
      setTimeout(() => {
        newItem.classList.remove('is-danger');
      }, 100);
    }
  }

  removeItem(item) {
    // Put our list into an array
    const list = this.state.list.slice();
    console.log(list);
    // Check to see if item passed in matches item in array
    list.some((element, i) => {
      if (element === item) {
        // If item matches, remove it from array
        list.splice(i, 1);
        return true;
      }
    });
    // Set state to list
    this.setState({
      list: list,
    });
  }

  render() {
    return(
      <div className='content'>
        <div className='container'>
          <section className='section'>
            <div>
              <ul>
                {this.state.list.map(item => (
                  <li key={item}><span className="delete" onClick={() => this.removeItem(item)}/> {item}</li>
                ))}
              </ul>
            </div>
          </section>
          {/* <section className='section' style={{display: 'grid', gridTemplateRows: 'minmax(2em, auto)', gridTemplateColumns: 'repeat(4, auto)'}}>
          //   {
          //     this.state.list.second.map(function func(i) {
          //       return <div key={i}>{i}</div> // Also works, even without func
          //     })
          //   }
          // </section>*/}
          <hr />
          <form id='addItemForm' className='form'>
            <input id='addInput' className='input' type='text' placeholder='Text input' />
            <hr />
            <button type='button' className='button is-info' onClick={() => this.addItem()}>
              Add...
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
