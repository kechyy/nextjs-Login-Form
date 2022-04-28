import type { NextPage } from 'next'
import Head from 'next/head'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Facebook, Linkedin, Twitter } from '../components/social-media-icon';
import FormInput from '../components/FormInput';

// Register Form Schema Definition
const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
}); 



const Underline = ({color}: {color: string}) => <div className={`w-10 border-2 ${color=='white'?'border-white':'border-green-500'} m-auto mb-5 mt-3`}></div>

const Register: NextPage = () => {
  const { register, handleSubmit, clearErrors, formState: 
    { errors, isDirty, isValid, isSubmitSuccessful, isValidating, submitCount, touchedFields, dirtyFields } 
  } = useForm({
    defaultValues: {
      firstname: 'John',
      lastname: 'Doe',
      email: 'johndoe@yahoo.com',
      age: '32',
      password: '.....',
      confirmPassword: '.....'
    },
    resolver: yupResolver(schema)
  });

  const onFormSubmit = (data: FormData) => {
    console.log(data)
    console.log('statuses', { isDirty, isValid, isSubmitSuccessful, isValidating, submitCount, touchedFields, dirtyFields})
  }
  return (
    <div className="w-full h-screen p-10 bg-gray-100 flex justify-center items-center" >
      <Head>
        <title>React Nextjs Tailwindcss Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-1/2 bg-white rounded-lg shadow-2xl flex overflow-hidden'>
          {/* Register Account */}
          <div className='sm:w-3/5'>
            <h2 className='p-5 text-sm font-bold'>Company<span className='text-green-500'>Name</span></h2>
            <div className='flex flex-col items-center justify-center px-5 xl:px-20 pt-10 pb-20'>
              <h2 className='text-center'>Sign in to Account</h2>
              <Underline color='green' />

             {/* Social Media Icons */}
              <div className='flex space-x-5 mb-3'>
                <Facebook />
                <Twitter />
                <Linkedin />
              </div>
              {/* Social Media Icons  ends*/}
             
              <p className='text-gray-400 pb-5'>Or use your gmail account</p>

              {/* Register Form */}
              <form className='w-full' onSubmit={handleSubmit(onFormSubmit)}>
                <FormInput 
                  type='text'
                  register={register} 
                  error={errors.firstname} 
                  label='Firstname' 
                  id='firstname'
                  placeholder="Firstname"
                />
                <FormInput
                  type='text'
                  register={register} 
                  error={errors.lastname} 
                  label='Lastname' 
                  id='lastname' 
                  placeholder='Lastname' 
                />
                <FormInput
                  type='email'
                  register={register} 
                  error={errors.email} 
                  label='Email Address' 
                  id='email'  
                  placeholder="Emai Address"
                />
                <FormInput 
                  type='text'
                  register={register} 
                  error={errors.age} 
                  label='Age' 
                  id='age' 
                  placeholder="Age" 
                />
                <FormInput 
                  type='password'
                  register={register} 
                  error={errors.password} 
                  label='Password' 
                  id='password'
                  placeholder="Password"  
                />
               <FormInput 
                  type='password'
                  register={register} 
                  error={errors.confirmPassword} 
                  label='Confirm Password' 
                  id='confirmPassword'
                  placeholder="Confirm Password" 
                />

                <div className='flex justify-between text-xs pt-1 mb-10 font-bold text-gray-500'>
                  <p>
                    <input type="checkbox" className=' mr-1' /><a href=''>Remember me</a>
                  </p>
                  <p><a>Forgot Password</a></p>
                </div>
                <div className='flex justify-center'>
                  <button type='submit' className='btn bg-green-500 inline-flex text-white'> Sign In </button>
                </div>
              </form>
               {/* Register Form ends */}
            </div>
          </div>

          {/* Sign up Account */}
          <div  className='w-full sm:w-2/5 bg-green-500 px-5 lg:px-12 py-36 flex flex-col justify-center items-center text-center text-white'>
            <h2 className='text-3xl mb-2 font-bold'>Hello, Friend!</h2>
            <Underline color='white' />
            <p className='text-white shadow-none mb-5'>Fill up personal information and start journey with us</p>
            <a href='' className='btn'> Sign Up </a>
          </div>
      </main>
    </div>
  )
}

export default Register
