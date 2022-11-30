import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'

let s= {fName: 'chiinedu', dept: 'catfish', gender: 'Male', faculty: 'SICT', level: '300'}

const Register = () => {
  const nav = useNavigate()

  const [values, setValues] = useState({})

  const valueChange = (e)=>{
    const { name, value } = e.target;
    setValues({...values, [name]:value})
    

  }


  const onRegister = (e)=>{
    e.preventDefault()
    const objKeys = Object.keys(values) //objkeys contains all the keys of the object Values
    
    if (objKeys.length === 5){
      console.log(values)
      setValues({})
      nav(`/confirm?state=${ btoa(JSON.stringify(s))}`)

    } else if (objKeys.length < 5){
      alert ('Please Fill in all Required feild')
    }
    
  }



  return (
    <div className="w-screeen h-screen bg-white px-7 py-20 flex flex-col items-center">
      <div className="flex items-center flex-col">
        <div className="bg-white min-h-full rounded drop-shadow-lg flex justify-center px-4 py-4 md:w-11/12">
          <div className="container bg-inherit flex flex-col items-center pt-2">
              <img src={logo} alt="Fcs-Logo" className="h-10 md:h-14 w-auto mb-3"/>

              <h3 className="font-workSans uppercase text-xs font-bold md:text-base">His Dwelling Place</h3>
              <p className="font-slabo text-sm md:text-sm">School of Destiny (SOD) '22</p>

              <form onSubmit={onRegister} className='mt-10 md:mt-6 w-full p-2'>
                  <label htmlFor="" className='font-workSans text-sm '>Full Name*</label>
                  <input type="text" name='fName' value={values.fName || ""} onChange={valueChange} placeholder='Enter Full name here e.g JOHN, Doe' className='px-4 py-2 my-2 rounded-sm text-xs md:text-sm font-workSans border outline-transparent font-thin w-full'/>

                  <label htmlFor="" className='font-workSans text-sm '>SOD Department*</label>
                  <select name='dept' value={values.dept || ""} onChange={valueChange} className='flex my-2 rounded-sm w-full px-4 py-2 border outline-transparent font-thin font-workSans text-sm md:text-sm cursor-pointer'>
                      <option value=""></option>
                      <option value="class two">Class two</option>
                      <option value="class three">Class three</option>
                      <option value="class four">Class four</option>
                      <option value="class five">Class five</option>
                  </select>

                  <div className='flex justify-between'>
                    <div>
                      <label htmlFor="" className='font-workSans text-sm'>Gender*</label>
                      <select name='gender' value={values.gender || ""} onChange={valueChange} className='flex my-2 rounded-sm w-full px-4 py-2 border outline-transparent font-thin font-workSans text-sm md:text-sm cursor-pointer'>
                        <option value=""></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="" className='font-workSans text-sm'>Faculty*</label>
                      <select name='faculty' value={values.faculty || ""} onChange={valueChange} className='flex my-2 rounded-sm w-full px-4 py-2 border outline-transparent font-thin font-workSans text-sm md:text-sm cursor-pointer'>
                        <option value=""></option>
                        <option value="SICT">SICT</option>
                        <option value="SEET">SEET</option>
                        <option value="SAAT">SAAT</option>
                        <option value="SLS">SLS</option>
                        <option value="SIPET">SIPET</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="" className='font-workSans text-sm'>Level*</label>
                      <select name='level' value={values.level || ""} onChange={valueChange} className='flex my-2 rounded-sm w-full px-4 py-2 border outline-transparent font-thin font-workSans text-sm md:text-sm cursor-pointer'>
                        <option value=""></option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                      </select>
                    </div>
                  </div>


                  <input type="submit" value="Register" className='bg-blue-400 text-white w-full mt-3 p-2 md:p-3 rounded-sm font-workSans uppercase text-sm cursor-pointer'/>
              </form>

          </div>
          
        </div>
      </div>

      <p className='text-sm font-slabo mt-8 text-slate-500'>&copy; FCS FUTMinna, 2022.</p>

    </div>
  )
}

export default Register
