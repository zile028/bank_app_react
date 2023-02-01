import './App.scss';
import {useState} from "react";
import Accounts from "./components/Accounts/Accounts";
import Forms from "./components/Forms";

const initInputData = {
	fullName: "",
	creditCard: "",
	phone: "",
	deposit: "",
}

function App() {
	const [inputData, setInputData] = useState(initInputData);
	const [accounts, setAccounts] = useState(() => {
		if (localStorage.hasOwnProperty("accounts")) {
			return JSON.parse(localStorage.getItem("accounts"))
		} else {
			return []
		}
	})
	const [isEdit, setIsEdit] = useState(false)
	const [currentAccount, setCurrentAccount] = useState(null)

	const inputHandler = (e) => {
		let copyInputData = {...inputData}
		copyInputData[e.target.name] = e.target.value
		setInputData(copyInputData)
	}

	const addHandler = (e) => {
		let copyAccounts = [...accounts]
		copyAccounts.push(inputData)
		setAccounts(copyAccounts)
		setInputData(initInputData)
		localStorage.setItem("accounts", JSON.stringify(copyAccounts))
	}

	const deleteHandler = (index) => {
		let copyAccounts = [...accounts]
		copyAccounts.splice(index, 1)
		setAccounts(copyAccounts)
		localStorage.setItem("accounts", JSON.stringify(copyAccounts))
	}

	const editHandler = (index) => {
		setInputData(accounts[index])
		setCurrentAccount(index)
		setIsEdit(true)
	}

	const updateHandler = () => {
		let copyAccounts = [...accounts]
		copyAccounts[currentAccount] = inputData
		setAccounts(copyAccounts)
		setInputData(initInputData)
		setIsEdit(false)
		localStorage.setItem("accounts", JSON.stringify(copyAccounts))
	}

	return (
	  <>
		  <header className="text-center py-5 bg-dark bg-opacity-10 container-fluid"><h1>Bank App</h1></header>
		  <section className="container">
			  <div className="row py-5">
				  <div className="col-md-6 offset-md-3">
					  <Forms inputHandler={inputHandler} inputData={inputData} updateHandler={updateHandler}
					         addHandler={addHandler} isEdit={isEdit}
					  />
				  </div>
			  </div>
			  <div className="row mt-5">
				  <div className="col-md-8 offset-md-2">
					  {accounts.length !== 0 ?
						<Accounts accounts={accounts} editHandler={editHandler} deleteHandler={deleteHandler}/>
						:
						<p>No accounts</p>
					  }
				  </div>
			  </div>
		  </section>
	  </>
	)
}

export default App;
