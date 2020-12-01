import react, { useState } from 'react';

function ExampleHooks(props) {
  const [ bill, setBill ] = useState(10)
  const [ tip, setTip ] = useState(15)
  const amount = bill * tip / 100

  return (
    <div>
      <h1>{bill} * {tip}% = {amount}</h1>
      <input
        type="number"
        value={bill}
        onChange={ (e) => { setBill(e.target.value) } }
      />
      <input
        type="number"
        value={tip}
        onChange={ (e) => { setTip(e.target.value) } }
      />
    </div>
  )
}

export default ExampleHooks
