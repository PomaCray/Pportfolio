

const Contact = () => {
  return (
    <div className='font-mono text-primary/100'>
      <h2 className='text-2xl font-bold mb-4'>Contact Me</h2>
      <p>If you have any questions or inquiries, feel free to reach out!</p>
      <form 
        action="mailto:abdurrazaqawwal@gmail.com"
        method="POST"
        encType="text/plain"
      className='mt-4'>
        <div className='mb-4'>
          <label htmlFor='name' className='block mb-2'>Name</label>
          <input type='text' id='name' className='border border-gray-300 p-2 w-full' />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block mb-2'>Email</label>
          <input type='email' id='email' className='border border-gray-300 p-2 w-full' />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block mb-2'>Message</label>
          <textarea id='message' className='border border-gray-300 p-2 w-full' rows={4}></textarea>
        </div>
        <button  type='submit' className='bg-primary text-white py-2 px-4 rounded'>Send</button>
      </form>
    </div>
  );
};

export default Contact;
