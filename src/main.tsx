import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Lottery from "./Lottery/Lottery.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Lottery updateCircles={function(): number {
            throw new Error('Function not implemented.');
        } } />
  </React.StrictMode>,
)
