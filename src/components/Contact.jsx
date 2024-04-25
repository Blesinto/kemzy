const Contact = () => {
  return (
    <div className='ps-[8rem] pe-[8rem] x:pe-[2rem] x:ps-[2rem] mt-[5rem] x:mt-[5rem]'>
      <h1 className='text-3xl font-bold text-center mb-8'>Contact Me</h1>
      <form className='space-y-4  '>
        <div className='flex x:flex-col justify-center items-center '>
          <div className='flex-col flex p-4'>
            <label htmlFor='first_name' className='text-gray-600'>
              First Name
            </label>
            <input
              type='text'
              id='first_name'
              name='first_name'
              className='input-field'
            />
          </div>

          <div className='flex-col flex'>
            <label htmlFor='last_name' className='text-gray-600'>
              Last Name
            </label>
            <input
              type='text'
              id='last_name'
              name='last_name'
              className='input-field text-white'
            />
          </div>
        </div>
        <div className='flex x:flex-col justify-center items-center '>
          <div className='flex flex-col p-4'>
            <label htmlFor='email' className='text-gray-600'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='input-field'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='phone' className='text-gray-600'>
              Phone Number
            </label>
            <input type='tel' id='phone' name='phone' className='input-field' />
          </div>
        </div>
        <div className='grid items-center justify-center  '>
          <div className='flex  flex-col'>
            <div>
              <label htmlFor='message' className='text-gray-600'>
                Message
              </label>
            </div>
            <div>
              {' '}
              <textarea
                id='message'
                name='message'
                rows='4'
                cols='50'
                className='input-field x:w-[13rem]'
              ></textarea>
            </div>
          </div>
          <button
            type='submit'
            className='bg-[#5E3BEE] hover:bg-white hover:text-[#5E3BEE] ps-4 pe-4 py-2 text-white rounded-lg text-[12px] mt-4'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
