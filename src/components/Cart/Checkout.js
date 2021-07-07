import classes from "./Checkout.module.css";

const Checkout = (props) => {
    const confirmHandler = (event) => {
        event.preventDefault();

        //now we validate user input, show feedback, and then send cart data to backend
    };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name'/>
      </div>
      <div className={classes.control}>
          <label htmlFor='address'>Street Address</label>
          <input type='text' id='address'/>
      </div>
      <div className={classes.control}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal'/>
      </div>
      <div className={classes.control}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city'/>
      </div> 
      <button type='button' onClick={props.onCancel}>Cancel</button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
