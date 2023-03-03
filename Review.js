import React from 'react'
import { useState } from 'react';

const Review = () => {
  const Data = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  
 const [value,setValue]=useState(0)
  const {id,name,job,image,text}=Data[value]
  return (
    <div className='h-96 px-4 w-2/6 flex flex-col items-center justify-center gap-4 bg-white shadow-xl rounded' >
      
<div>
  <img src={image} className=' border-4 border-blue-600 rounded-[100%] h-24 w-24 '/>
</div>
<div className='  text-center'>
  <h1 className=' text-black font-semibold uppercase  text-[16px] '>{name}</h1>
<p className='text-blue-400 pt-1 font-semibold uppercase text-[12px]'>{job}</p>
<p className=' pt-2 text-slate-500 text-[12px]'>
  {text}
</p>
</div>
<div className='flex flex-col  w-full items-center'>
<div className='flex gap-4'>
  <p onClick={()=>(value>=0? setValue(value+1):setValue(value))} className='text-2xl hover:border-2 hover:border-black p-1 hover:bg-slate-100 cursor-pointer text-blue-500 font-bold'> &#60;</p>
  <p onClick={()=>(value>=0? setValue(value-1):setValue(value))} className='text-2xl hover:border-2 hover:border-black p-1 hover:bg-slate-100 cursor-pointer text-blue-500 font-bold'> &gt;</p>
  
</div>

<div className='flex w-full mt-2 justify-center'><button
onClick={()=>{
  setValue(Math.floor(Math.random()*Data.length))
}}

 className='px-3  py-2 bg-yellow-500 shadow-xl rounded font-semibold uppercase'>Random</button></div>
</div>





    </div>
  )
}

export default Review
