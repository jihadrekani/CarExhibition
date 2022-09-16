
import Layout from '../layouts/MainLayout';
import React from'react'
const AddProduct=()=>{
const[name,setName]=React.useState('');
const[price,setPrice]=React.useState('');
const[category,setCategory]=React.useState('');
const[company,setCompany]=React.useState('');
const addProduct=()=>{
    console.log(name,price,category,company);}

    return(
      <Layout>




<div className="bg-sky-800    flex items-center justify-center">
  <div className="bg-white  mt-[150px] mb-[150px] lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
    <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
      </svg>
    </div>
    <form className="p-12 md:p-24">
      <div className='text-center font-bold mb-3 text-2xl'>add new Cars</div>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <input type={"text"} id="car-name" className="bg-gray-200 rounded pl-2 py-2 md:py-4 focus:outline-none w-full" placeholder="Car name" />
      </div>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <input type={"text"} id="price" className="bg-gray-200 rounded pl-2 py-2 md:py-4 focus:outline-none w-full" placeholder="Price" />
      </div>

      <div className="flex items-center text-lg mb-6 md:mb-8">
        <input type={"text"} id="company" className="bg-gray-200 rounded pl-2 py-2 md:py-4 focus:outline-none w-full" placeholder="Company" />
      </div>

      <div className="flex items-center text-lg mb-6 md:mb-8">
        <input type={"text"} id="category" className="bg-gray-200 rounded pl-2 py-2 md:py-4 focus:outline-none w-full" placeholder="category" />
      </div>

      <div className="flex items-center text-md mb-6 md:mb-8">
        <input type={"file"}    className=" bg-gray-100 rounded pl-2 py-2 md:py-4 focus:outline-none w-full" />
      </div>

      <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">Add</button>
    </form>
  </div>
 </div>

        
      {/* <div className='bg-gray-200 container flex flex-col items-center justify-center h-screen'>
          <h2>this page will update with backend</h2>
          <div className='w-[50%] h-[50%] bg-sky-900 text-white mt-3 flex flex-col items-center justify-center rounded'>
            <div>
        <h1 className='mb-4 mt-2 font-bold text-center'> Add new Products </h1>
        <input className='mb-3 mr-3 rounded pl-1 bg-sky-700 border w-[250px] border-slate-50' type={"text"}placeholder='Enter product name'
        value={name}onChange={(e)=>{setName(e.target.value)}}
        />
        <input className='mb-3 rounded pl-1 bg-sky-700 border w-[250px] border-slate-50' type="text"placeholder="Enter product price"
          value={price}onChange={(e)=>{setPrice(e.target.value)}}
        />
        </div>

        <div>
        <input className='mb-3 mr-3 rounded pl-1 bg-sky-700 border w-[250px] border-slate-50' type="text"placeholder="Enter product category" 
          value={category} onChange={(e)=>{setCategory(e.target.value)}}
        />
        <input className='mb-3  rounded pl-1 bg-sky-700 text-red-500 border w-[250px] border-slate-50' type="text" placeholder ="Enter product company"
        value={company} onChange={(e)=>{setCompany(e.target.value)}}
        />
        </div>
        <div className='w-[215px] mx-auto'>
        <input className='mx-auto mt-2 ' type={"file"} multiple ></input>
        </div>
         <button className="bg-sky-700 text-white border border hover:bg-sky-800 rounded-xl py-[3px] px-[6px] mt-3" onClick={addProduct}>Add Product</button>
   


         </div>
   </div> */}
   
</Layout>
   
    )};
   
export default AddProduct; 