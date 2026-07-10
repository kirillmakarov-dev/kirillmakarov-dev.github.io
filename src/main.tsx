import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import ClickSpark from './components/ClickSpark.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={12}
      sparkRadius={24}
      sparkCount={10}
      duration={460}
      extraScale={1.15}
    >
      <App />
    </ClickSpark>
  </BrowserRouter>,
)
