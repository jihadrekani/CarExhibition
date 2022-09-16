import React from 'react'

export default function FilterForm() {
  return (
    <div className=' flex'>

<form className='container  filterform  rounded lg:mt-6 xl:mb-[45px]  w-[500px] mx-auto  pb-6 mt-[17px] md:mt-[55px] mb-12 grid  place-items-center   '>
<div className='    w-[320px] h-[260px]  text-center  '>
  <h2 className='text-lg  text-white text-center font-sans border border-solid  rounded-xl mt-6  '>Search our extensive range of quality cars with prices to suit all budgets</h2>
<select className='rounded w-[250px]  hover:bg-sky-700 mt-6 mb-3 bg-sky-800 text-white border-solid border border-sky-600' id="filterform">
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
<select className='w-[250px] rounded mb-3 bg-sky-800  hover:bg-sky-700 text-white border-solid border border-sky-600' id="price">
<option value="price min" defaultValue="selected">price (min)</option>
  <option value="10,000$">from 10,000$</option>
  <option value="20,000$" >from 20,000$</option>
  <option value="30,000$" >from 30,000$</option>
  <option value="40,000$" >from 40,000$</option>
  <option value="50,000$" >from 50,000$</option>
  <option value="60,000$" >from 60,000$</option>
  <option value="70,000$" >from 70,000$</option>
  <option value="80,000$" >from 80,000$</option>
  <option value="90,000$" >from 90,000$</option>
  <option value="100,000$" >from 100,000$</option>
  <option value="110,000$" >from 110,000$</option>
  <option value="120,000$" >from 120,000$</option>
  <option value="130,000$" >from 130,000$</option>
  <option value="140,000$" >from 140,000$</option>
  <option value="150,000$" >from 150,000$</option>
  <option value="160,000$" >from 160,000$</option>
  <option value="170,000$" >from 170,000$</option>
  <option value="180,000$" >from 180,000$</option>
  <option value="190,000$" >from 190,000$</option>
  <option value="200,000$" >from 200,000$</option>
</select>

<select className='w-[250px] mb-3  rounded bg-sky-800 text-white border-solid border border-sky-600  hover:bg-sky-700' id="price">
<option value="price max" defaultValue="selected">price (max)</option>
  <option value="10,000$">from 10,000$</option>
  <option value="20,000$" >from 20,000$</option>
  <option value="30,000$" >from 30,000$</option>
  <option value="40,000$" >from 40,000$</option>
  <option value="50,000$" >from 50,000$</option>
  <option value="60,000$" >from 60,000$</option>
  <option value="70,000$" >from 70,000$</option>
  <option value="80,000$" >from 80,000$</option>
  <option value="90,000$" >from 90,000$</option>
  <option value="100,000$" >from 100,000$</option>
  <option value="110,000$" >from 110,000$</option>
  <option value="120,000$" >from 120,000$</option>
  <option value="130,000$" >from 130,000$</option>
  <option value="140,000$" >from 140,000$</option>
  <option value="150,000$" >from 150,000$</option>
  <option value="160,000$" >from 160,000$</option>
  <option value="170,000$" >from 170,000$</option>
  <option value="180,000$" >from 180,000$</option>
  <option value="190,000$" >from 190,000$</option>
  <option value="200,000$" >from 200,000$</option>
</select>
</div>
<button className='w-[100px] rounded bg-sky-800 text-white mb-[10px] xl:mb-[110px] xl:-mt-[30px] hover:bg-sky-700 border-solid border border-sky-600'>Search</button>
</form>

    </div>
  )
}
