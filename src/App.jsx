import GlobalStyle from "./globalStyles"
import Home from "./pages/Home"
import { HeaderContext } from "./contexts/HeaderContext"
import { useState } from "react"

function App() {

  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <HeaderContext.Provider value={{ headerHeight, setHeaderHeight }}>
      <GlobalStyle/>
      <Home/>
    </HeaderContext.Provider>
      
  )
}

export default App
