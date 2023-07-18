import React from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {createHouse, addhouse} from '../../Redux/Actions/Actions'

export default function CreateHouse() {
  const housesCreateID = useSelector((st)=>st.housesCreateID)
  const housesLength = useSelector((st)=>st.housesLength)
  const dispatch = useDispatch()
  let [inputs, setInputs] = React.useState({
    id: housesCreateID,
    name: "",
    region: "",
    words: "",
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
    <div className='bg-amber-950 text-center w-full h-screen pt-20'>
        <h2 className='font-bold text-yellow-500 w-fit mx-auto border-b-4 pb-2 px-4 border-yellow-500 text-2xl'>ADD A HOUSE</h2>
        <form className='flex flex-col text-yellow-100 w-96 mx-auto mt-10' onSubmit={handleSubmit}>
          <div className='flex w-fit mx-auto'>
            <input 
            className='bg-transparent hover:border-yellow-200 hover:py-5 transition-all border-b-2 px-5 py-2 border-yellow-500'
            type="text" 
            name='name' 
            placeholder='Name'
            value={inputs.name}
            onChange={handleChange}
            />
          </div>
          <div className='flex w-fit mx-auto'>
            <input 
            className='bg-transparent hover:border-yellow-200 hover:py-5 transition-all border-b-2 px-5 py-2 border-yellow-500'
            type="text" 
            name='region' 
            placeholder='Region'
            value={inputs.region}
            onChange={handleChange}
            />
          </div>
          <div className='flex w-fit mx-auto'>
            <input 
            className='bg-transparent hover:border-yellow-200 hover:py-5 transition-all border-b-2 px-5 py-2 border-yellow-500'
            type="text" 
            name='words' 
            placeholder='Words'
            value={inputs.words}
            onChange={handleChange}
            />
          </div>
          <button className='mt-10 bg-yellow-500 w-fit mx-auto px-4 rounded-full hover:shadow-xl hover:bg-yellow-300 hover:font-bold text-black transition-all py-2' type="submit">Create</button>
      </form>
    </div>
  )
}
