import { useState } from 'react'

import RoutesApp from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RoutesApp/>
    </div>
  )
}

export default App