
const TotalPrice = ({state}) => {

  function calculateTotalPrice(){
    const totalCost = state.data?.reduce((acc,cur) => {
      acc = acc + cur.price * cur.quantity;
      return acc
    },0)
    return totalCost
  }

  return (
    <div id="total-price-container">
        <p>Number of Products : <span>{state.data.length}</span> </p>
        <br/>
        <p>Total Price : <span>$ {calculateTotalPrice()}</span> </p>
        <br/>
        <button className="btn">Proceed to pay</button>
    </div>
  )
}

export default TotalPrice