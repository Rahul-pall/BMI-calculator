import React, { useState } from 'react'
const BmiCal = () => {
              const [weight,setWeight]=useState(0);
              const [height,setHeight]=useState(0);
              const [msg,setMsg]=useState('');
              const [BMI,setBMI]=useState('');

              const submit=(e)=>{
                    e.preventDefault();
                    if(weight===0 || height===0){
                            alert("enter a valid value")
                    }    
                    else{
                            let bmi=(weight/(height*height)*10000);
                            setBMI(bmi.toFixed(1))

                            if(bmi<19){
                                          setMsg("You are under weight");
                            }
                            else if(bmi>=19 && bmi <25){
                                          setMsg("you are on helthi weight")
                            }
                            else{
                                          setMsg("you are overweight")
                            }
                    }     
              }

              const Relode=()=>{
                window.location.reload();
              }

  return (
    <>
      <div className=' flex justify-center items-center h-[100vh] w-[100%] bg-gray-500'>
        <div className="f-container w-[20%] h-[60%] shadow-lg shadow-white p-4 rounded-lg bg-gray-300">
        <h2 className='text-center text-2xl pb-4'>BMI CALCULATOR</h2>
        <form action="" className='gap-7'>
        <div className='m-4'>
          <label >Weight (kg)</label>
          <input className='block rounded-sm px-2' type="number" placeholder='enter weight value' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        </div>

        <div className='m-4'>
          <label>Height (cm)</label>
          <input className='block rounded-sm px-2' type="number" placeholder='enter weight value' value={height}
              onChange={(e)=>setHeight(e.target.value)}
          />
        </div>
                
        <div className='m-4 gap-3'>
            <button  className='btn border-2 px-4 py-1 border-gray-400 hover:bg-gray-400 hover:text-white'
             type='submit' onClick={submit}>submit</button>
            <button className='btn btn-outline border-2 px-4 py-1 mx-6 border-gray-400 hover:bg-gray-400 hover:text-white' type='submit' onClick={Relode}>Relode</button>
        </div>

        <div className='center m-4'>
             <h2>Your BMI is :{BMI}</h2>
             <p>{msg}</p>
        </div>
              
        </form>
        </div>
      </div>
    </>
  )
}

export default BmiCal;
