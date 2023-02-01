import React from 'react';


function Forms({inputHandler, inputData, updateHandler, addHandler, isEdit}) {
	const styleCSS = {
		backgroundColor: "red",
		padding: "10px",
		borderRadius: "10px"
	}

	return <div className="form text-center" style={styleCSS}>
		<input type="text" className="form-control mb-2" name="fullName" placeholder="Full name"
		       onInput={inputHandler}
		       value={inputData.fullName}
		/>
		<input type="text" className="form-control mb-2" name="creditCard" placeholder="Credit card"
		       onInput={inputHandler} value={inputData.creditCard}/>
		<input type="text" className="form-control mb-2" name="phone" placeholder="Phone"
		       onInput={inputHandler} value={inputData.phone}/>
		<input type="text" className="form-control mb-2" name="deposit" placeholder="Deposit"
		       onInput={inputHandler} value={inputData.deposit}/>
		{isEdit ?
		  <button className="btn btn-primary w-50" onClick={() => updateHandler()}>Update
		  </button>
		  :
		  <button className="btn btn-primary w-50" onClick={addHandler}>Add</button>
		}
	</div>;
}

export default Forms;