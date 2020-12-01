import react, { Component } from 'react'
import './TipCalc.css';

class TipCalc extends Component {
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
          <p>Tip</p>
          <h2>${tipAmount.toFixed(2)}</h2>

          <p>Total</p>
          <h2>${totalAmount.toFixed(2)}</h2>

          <p>Tip Per Person</p>
          <h2>${tipPerPerson.toFixed(2)}</h2>

          <p>Total Per Person</p>
          <h2>${totalPerPerson.toFixed(2)}</h2>
        </div>
      
        <div className="FlexChild Inputs">
          <h1>TIP CALCULATOR</h1>
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

export default TipCalc
