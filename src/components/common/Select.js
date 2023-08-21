import React, { useEffect, useRef } from 'react'
import vector from '../../assets/Vector.svg'

const Select = ({initial,editing, selected, setSelected, options, selectOpen, setSelectOpen}) => {
  const ref = useRef()

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       setSelectOpen(false)
  //     }
  //   };
  //   document.addEventListener('click', handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true);
  //   };
  // }, [selectOpen]);


  return (
    <div className='h-[44px] w-[100%] relative ' ref={ref}>
    <div
  className={`w-full border-[1px] border-[#1A1A1A] ! outline-none  rounded-[8px] !h-[100%] placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 !bg-transparent px-3 custom-select flex items-center justify-between cursor-pointer ${editing?'':'pointer-events-none'}`} onClick={()=> setSelectOpen(prev => !prev)}>
   {
    selected ? <p>{selected}</p> :
    <p>{initial}</p>
    }
   <p className={`${(selectOpen && editing) ? '-rotate-90': ''}`}><img src={vector}/></p>
</div>
{editing && selectOpen &&
<div className='w-[100%] bg-[#F7F6F9] absolute z-10 p-1 h-fit overflow-y-auto max-h-[200px] text-[15px] font-opensans rounded-[8px] shadow-xl'>
    {
        options.map((item,i)=> (
            <div className='w-[100%] hover:bg-[#002550] hover:text-white flex items-center px-2 rounded-[8px] cursor-pointer h-[38px]' onClick={()=> {setSelected(item); setSelectOpen(false)}}>{item}</div>
        ))
    }


</div>
}
  </div>
  )
}

export default Select
