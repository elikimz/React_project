
import './App.css'
import Personal from './components/personal'
import Placeholder from './components/placeholder'
function App() {
  const name = "kimani"
  const bio="Passionate developer."
  const bio1="Robotics engineer designing and programming."
  const bio2="Blockchain expert developing decentralized applications."
  const name2 = "Faith"
  const name3 = "Samuel"
 const age =25
 const age2 =22
 const age3 =24


  return (
  <>
  <h1>Profile_Cards</h1>
  <div class="container"> 
<div className='one-column'>
  <Placeholder w={100} h={100}/>
  <Personal name={name} age={age} bio={bio}/>
  </div>
<div className='two-column'>
  <Placeholder w={100} h={100}/>
  <Personal name={name2} age={age2} bio={bio1}/>
  </div>
  <div className='three-column'>
  <Placeholder w={100} h={100}/>
  <Personal name={name3} age={age3} bio={bio2}/>
</div>
</div>
  </>
  )
}

export default App
