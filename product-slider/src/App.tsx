import HeadphoneImg from './assets/foto-1.webp'
import HeadphoneImg2 from './assets/foto-2.webp'
import HeadphoneImg3 from './assets/foto-3.webp'
import HeadphoneImg4 from './assets/foto-4.webp'

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className='w-90'>
        <img src={HeadphoneImg} alt="headphone" />
      </div>
      <section className='flex gap-3 w-1/3'>
        <div className='rounded-md transition ease-in-out hover:opacity-90 hover:border-blue-500 hover:border-2 cursor-pointer'>
          <img className='rounded-md' src={HeadphoneImg} alt="" />
        </div>
        <div className='rounded-md transition ease-in-out hover:opacity-90 hover:border-blue-500 hover:border-2 cursor-pointer'>
          <img className='rounded-md' src={HeadphoneImg2} alt="" />
        </div>
        <div className='rounded-md transition ease-in-out hover:opacity-90 hover:border-blue-500 hover:border-2 cursor-pointer'>
          <img className='rounded-md' src={HeadphoneImg3} alt="" />
        </div>
        <div className='rounded-md transition ease-in-out hover:opacity-90 hover:border-blue-500 hover:border-2 cursor-pointer'>
          <img className='rounded-md' src={HeadphoneImg4} alt="" />
        </div>
      </section>
    </div>
  )
}

export default App
