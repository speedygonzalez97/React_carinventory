import Background from '../assets/images/Cars.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex  h-screen'>
          <h1 className='p-5 bg-opacity-100 text-black rounded font-size-100px'>Welcome to the car inventory!</h1>
        </div>
    </div>
  )
}

export default Home