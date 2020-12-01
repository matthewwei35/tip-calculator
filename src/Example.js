import react, { Component } from 'react'

class Example extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bill: 10.00,
      tip: 15,
      split: 2
    }
  }

  render() {
    const tipAmount = this.state.bill * this.state.tip / 100;
    const tipPerPerson = tipAmount / this.state.split;
    const totalAmount = tipAmount + this.state.bill;
    const totalPerPerson = totalAmount / this.state.split;

    return (
      <div>
        <h1>Tip Amount</h1>
        <h2>${tipAmount.toFixed(2)}</h2>

        <h1>Tip Per Person</h1>
        <h2>${tipPerPerson.toFixed(2)}</h2>

        <h1>Total</h1>
        <h2>{tipAmount} + {this.state.bill} = ${totalAmount.toFixed(2)}</h2>

        <h1>Total Per Person</h1>
        <h2>${totalPerPerson.toFixed(2)}</h2>
      
        <label>
          Bill
          <input
            value={this.state.bill}
            type="number"
            onChange={ (e) => { this.setState( { bill: e.target.value } ) } }
          />
        </label>

        <label>
          Tip
          <input
            value={this.state.tip}
            type="number"
            onChange={ (e) => { this.setState( { tip: e.target.value } ) } }
          />
        </label>

        <label>
          Split
          <input
            value={this.state.split}
            type="number"
            onChange={ (e) => { this.setState( { split: e.target.value } ) } }
          />
        </label>
      </div>
    )
  }
}

export default Example
