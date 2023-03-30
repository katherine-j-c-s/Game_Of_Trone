import React from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {createHouse, addhouse} from '../../Redux/Actions/Actions'

export default function CreateHouse() {

  const housesLength = useSelector((st)=>st.housesLength)
  const dispatch = useDispatch()
  let [inputs, setInputs] = React.useState({
    id: housesLength,
    name: "",
    region: "",
    words: ""
    
  });

  function handleChange(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addhouse())
    console.log(housesLength);
    console.log(inputs);
    dispatch(createHouse(inputs))
    setInputs({
      id: housesLength,
      name: "",
      region: "",
      words: ""
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input 
      type="text" 
      name='name' 
      value={inputs.name}
      onChange={handleChange}
      />
      <label>Region: </label>
      <input 
      type="text" 
      name='region' 
      value={inputs.region}
      onChange={handleChange}
      />
      <label>Words: </label>
      <input 
      type="text" 
      name='words' 
      value={inputs.words}
      onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
  )
}
