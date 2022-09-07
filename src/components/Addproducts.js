import React from'react'
const AddProduct=()=>{
const[name,setName]=React.useState('');
const[price,setPrice]=React.useState('');
const[category,setCategory]=React.useState('');
const[company,setCompany]=React.useState('');
const addProduct=()=>{
    console.log(name,price,category,company);}

    return(
      <div className='bg-green-500 flex flex-col items-center justify-center h-screen'>
          <h2>this page will update with backend</h2>
            
        <h1 className='mb-4 font-bold'> Add new Products </h1>
        <input className='mb-3 rounded pl-1 bg-blue-200 border w-[500px] border-slate-50' type="text"placeholder='Enter product name'
        value={name}onChange={(e)=>{setName(e.target.value)}}
        />
        <input className='mb-3 rounded pl-1 bg-blue-200 border w-[500px] border-slate-50' type="text"placeholder="Enter product price"
          value={price}onChange={(e)=>{setPrice(e.target.value)}}
        />
        <input className='mb-3 rounded pl-1 bg-blue-200 border w-[500px] border-slate-50' type="text"placeholder="Enter product category" 
          value={category} onChange={(e)=>{setCategory(e.target.value)}}
        />
        <input className='mb-3 rounded pl-1 bg-blue-200 border w-[500px] border-slate-50' type="text" placeholder="Enter product company"
        value={company} onChange={(e)=>{setCompany(e.target.value)}}
        />
        <input className='' type={"file"} multiple ></input>
         <button className="bg-green-700 text-white border border hover:bg-green-500 rounded-xl py-[3px] px-[6px] mt-2" onClick={addProduct}>Add Product</button>
   



   </div>
   

   
    )};
   
export default AddProduct; 