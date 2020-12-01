import react, { Component } from 'react'
import './Example.css';

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
      <div className="FlexContainer">
        <div className="FlexChild Calculations">
          <p>Tip Amount</p>
          <h1>${tipAmount.toFixed(2)}</h1>

          <p>Tip Per Person</p>
          <h1>${tipPerPerson.toFixed(2)}</h1>

          <p>Total</p>
          <h1>${totalAmount.toFixed(2)}</h1>

          <p>Total Per Person</p>
          <h1>${totalPerPerson.toFixed(2)}</h1>
        </div>
      
        <div className="FlexChild Inputs">
          <form>
            <fieldset>
              <p>
                <label>
                  <p>Bill</p>
                  <input
                    value={this.state.bill}
                    type="number"
                    onChange={ (e) => { this.setState( { bill: parseFloat(e.target.value) } ) } }
                  />
                </label>
              </p>

              <p>
                <label>
                  <p>Tip %</p>
                  <input
                    value={this.state.tip}
                    type="number"
                    onChange={ (e) => { this.setState( { tip: parseFloat(e.target.value) } ) } }
                  />
                </label>
              </p>

              <p>
                <label>
                  <p># of People</p>
                  <input
                    value={this.state.split}
                    type="number"
                    onChange={ (e) => { this.setState( { split: parseInt(e.target.value) } ) } }
                  />
                </label>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default Example
