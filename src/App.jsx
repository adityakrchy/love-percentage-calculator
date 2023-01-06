import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [result, setResult] = useState('')
  const [remarks, setRemarks] = useState('')

  // const handleSubmit = (e) =>{
  //   e.preventDefalut();
  //   console.log(firstName, secondName)
  // }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(firstName, secondName)
    const options = {
      method: 'GET',
      url: 'https://love-calculator.p.rapidapi.com/getPercentage',
      params: { sname: `${firstName}`, fname: `${secondName}` },
      headers: {
        'X-RapidAPI-Key': '978c36a0admshcddd701e5a66af8p17e015jsn1ea0ab95bb59',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      setResult(response.data.percentage + '%')
      setRemarks(response.data.result)

    }).catch(function (error) {
      console.error(error);
    });

  }



  return (
    <>
      
      <div className="flex flex-col justify-center">
        {/* create a heading for love percentage calculator */}

        <div className="mb-3 xl:w-96">
          <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-white-700"
          >Enter First Name</label
          >
          <input type="text" className="form-control block w-full px-3 py-1.5  text-base font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlInput1"
            value={firstName}
            onChange={(e) => { setFirstName(e.target.value) }}
            placeholder="First Name"
          />
        </div>
        <div className="mb-3 xl:w-96">
          <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-white-700"
          >Enter Second Name</label
          >
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlInput1"
            placeholder="Second Name"
            value={secondName}
            onChange={(e) => { setSecondName(e.target.value) }}
          />
        </div>
        <button className="bg-white  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleSubmit}>
          Check
        </button>
        <div className="text-white-700 ">
          {/* <p>{result}</p>
          <p>{remarks}</p> */}
          <p className="text-2xl">{result}</p>
          <p className="text-2xl">{remarks}</p>
        </div>
      </div>
    </>
  )
}

export default App
