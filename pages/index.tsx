import type { NextPage } from 'next'
import Head from 'next/head'
import { useForm } from 'react-hook-form';
import { Facebook, Linkedin, Twitter } from '../components/social-media-icon';



const Underline = ({color}: {color: string}) => <div className={`w-10 border-2 ${color=='white'?'border-white':'border-green-500'} m-auto mb-5 mt-3`}></div>

const Home: NextPage = () => {
  const { register, handleSubmit, clearErrors, formState: 
    { errors, isDirty, isValid, isSubmitSuccessful, isValidating, submitCount, touchedFields, dirtyFields } 
  } = useForm({
    defaultValues: {
      email: 'johndoe@yahoo.com',
      password: '.....'
    }
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
          {/* Sign in Account */}
          <div className='sm:w-3/5'>
            <h2 className='p-5 text-sm font-bold'>Company<span className='text-green-500'>Name</span></h2>
            <div className='flex flex-col items-center justify-center px-5 xl:px-20 pt-10 pb-20'>
              <h2 className='text-center'>Sign in to Account</h2>
              <Underline color='green' />
              <div className='flex space-x-5 mb-3'>
                <Facebook />
                <Twitter />
                <Linkedin />
              </div>
             
              <p className='text-gray-400 pb-5'>Or use your gmail account</p>
              <form className='w-full' onSubmit={handleSubmit(onFormSubmit)}>
                <div className='mb-5'>
                  <input type='email' placeholder="Email address" className='form-control' {...register('email',
                   { 
                     required: true, 
                     pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                  }) } />
                  {errors.email?.type === 'required' && 
                  <>
                    <span className='inline-block text-left text-red-500 text-xs'>
                      Email field is required
                    </span>
                    <button type='button' onClick={() => clearErrors('email')} className='text-xs ml-2 text-red-500'>X</button>
                  </>
                  }
                  {errors.email?.type === 'pattern' && 
                  <>
                    <span className='inline-block text-left text-red-500 text-xs'>
                      Email field pattern is invalid
                    </span>
                    <button type='button' onClick={() => clearErrors('email')}>X</button>
                  </>
                  }
                </div>
                <div className='mb-5'>
                  <input type='password'  placeholder="Password" className='form-control' { ...register('password',{minLength: 3, required: true}) } />
                  {errors.password?.type === 'required' && 
                    <>
                      <span className='inline-block text-left text-red-500 text-xs'>
                        Password field is required
                      </span>
                      <button type='button' onClick={() => clearErrors('password')}>X</button>
                    </>
                  }
                  {errors.password?.type === 'minLength' && 
                    <>
                      <span className='inline-block text-left text-red-500 text-xs'>
                        Password cannot be less than 3 characters
                      </span>
                      <button type='button' onClick={() => clearErrors('password')}>X</button>
                    </>
                   
                  }
                </div>
                
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

export default Home
