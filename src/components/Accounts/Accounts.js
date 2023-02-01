import React from 'react';
import "./accounts.scss"

function Accounts({accounts, editHandler, deleteHandler}) {

	return (
	  <table className="table accounts-wrapper">
		  <thead>
		  <tr>
			  <th>Full name</th>
			  <th>Credit card</th>
			  <th>Phone</th>
			  <th>Deposit</th>
			  <th className="text-end">Edit/Delete</th>
		  </tr>
		  </thead>
		  <tbody>
		  {accounts.map((acc, index) => {
			  return (
				<tr key={index}>
					<td>{acc.fullName}</td>
					<td>{acc.creditCard}</td>
					<td>{acc.phone}</td>
					<td>{acc.deposit}</td>
					<td className="text-end">
						<button className="btn btn-sm btn-warning"
						        onClick={() => editHandler(index)}>Edit
						</button>
						<button className="btn btn-sm btn-danger" onClick={() => deleteHandler(index)}>Delete
						</button>
					</td>
				</tr>)
		  })}
		  </tbody>
		  <tfoot>
		  <tr>
			  <td colSpan={4} className="text-end">Number clients:</td>
			  <td className="text-center">{accounts.length}</td>
		  </tr>
		  </tfoot>
	  </table>
	)
}

export default Accounts;