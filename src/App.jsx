import { useRef } from 'react'
import Background from './components/Background'
import Card from './components/Card'
import { cardData } from './Data'
function App() {
  const ref = useRef(null);
  return (
    <div ref={ref} className='fixed w-full h-screen overflow-hidden'>
      <Background />
      <div className='fixed w-full h-screen top-0 left-0 z-20 flex flex-wrap gap-9' >
        {
          cardData.map((item, idx) => (
            <Card item={item} key={idx} referance={ref} />
          ))
        }
      </div>
    </div>
  )
}

export default App
