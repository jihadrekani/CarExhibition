import React from 'react'

export default function FilterForm() {
  return (
    <div>

<form className='container  filterform bg-zinc-900 rounded lg:mt-6 xl:mb-[45px] w-[500px] mx-auto  pb-6 mt-[17px] mb-12 grid  place-items-center   '>
<div className='    w-[320px] h-[260px]  text-center  '>
  <h2 className='text-lg  text-white text-center font-sans bg-red-700 rounded-xl mt-2  '>Search our extensive range of quality cars with prices to suit all budgets</h2>
<select className='rounded w-[250px]  hover:bg-red-600 mt-2 mb-3 bg-red-700 text-white border-solid border border-sky-600' id="Any type">
  <option value="Any make" defaultValue="selected">Any make</option>
  <option value="Audi">Audi</option>
  <option value="BMW">BMW</option>
  <option value="chevrolet">chevrolet</option>
  <option value="ford">ford</option>
  <option value="honda">honda</option>
  <option value="infiniti">infiniti</option>
  <option value="Isuzu">Isuzu</option>
  <option value="Jaguar">Jaguar</option>
  <option value="Jeep">Jeep</option>
  <option value="Kia">Kia</option>
  <option value="Land Rover">Land Rover</option>
  <option value="Lexus" >Lexus</option>
  <option value="Mazda">Mazda</option>
  <option value="Mercedes Benz">Mercedes Benz</option>
  <option value="Nissan">Nissan</option>
  <option value="Porsche">Porsche</option>
  <option value="Skoda">Skoda</option>
  <option value="Suzuki">Suzuki</option>
  <option value="Toyota">Toyota</option>
</select>

<br/>
<select className='w-[250px] rounded mb-3 bg-red-700  hover:bg-red-600 text-white border-solid border border-sky-600' id="price">
<option value="price min" defaultValue="selected">price (min)</option>
  <option value="10,000$">from 10,000$</option>
  <option value="audi" >from 20,000$</option>
  <option value=" 10,000$" >from 30,000$</option>
  <option value=" 10,000$" >from 40,000$</option>
  <option value=" 10,000$" >from 50,000$</option>
  <option value=" 10,000$" >from 60,000$</option>
  <option value=" 10,000$" >from 70,000$</option>
  <option value=" 10,000$" >from 80,000$</option>
  <option value=" 10,000$" >from 90,000$</option>
  <option value=" 10,000$" >from 100,000$</option>
  <option value=" 10,000$" >from 110,000$</option>
  <option value=" 10,000$" >from 120,000$</option>
  <option value=" 10,000$" >from 130,000$</option>
  <option value=" 10,000$" >from 140,000$</option>
  <option value=" 10,000$" >from 150,000$</option>
  <option value=" 10,000$" >from 160,000$</option>
  <option value=" 10,000$" >from 170,000$</option>
  <option value=" 10,000$" >from 180,000$</option>
  <option value=" 10,000$" >from 190,000$</option>
  <option value=" 10,000$" >from 200,000$</option>
</select>

<select className='w-[250px] rounded bg-red-700 text-white border-solid border border-sky-600  hover:bg-red-600' id="price">
<option value="price max" defaultValue="selected">price (max)</option>
  <option value="10,000$">from 10,000$</option>
  <option value="audi" >from 20,000$</option>
  <option value=" 10,000$" >from 30,000$</option>
  <option value=" 10,000$" >from 40,000$</option>
  <option value=" 10,000$" >from 50,000$</option>
  <option value=" 10,000$" >from 60,000$</option>
  <option value=" 10,000$" >from 70,000$</option>
  <option value=" 10,000$" >from 80,000$</option>
  <option value=" 10,000$" >from 90,000$</option>
  <option value=" 10,000$" >from 100,000$</option>
  <option value=" 10,000$" >from 110,000$</option>
  <option value=" 10,000$" >from 120,000$</option>
  <option value=" 10,000$" >from 130,000$</option>
  <option value=" 10,000$" >from 140,000$</option>
  <option value=" 10,000$" >from 150,000$</option>
  <option value=" 10,000$" >from 160,000$</option>
  <option value=" 10,000$" >from 170,000$</option>
  <option value=" 10,000$" >from 180,000$</option>
  <option value=" 10,000$" >from 190,000$</option>
  <option value=" 10,000$" >from 200,000$</option>
</select>
</div>
<button className='w-[250px] rounded bg-red-700 text-white mb-3 hover:bg-red-600 border-solid border border-sky-600'>Search</button>
</form>

    </div>
  )
}
