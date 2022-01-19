import React from 'react'
import Capstone from 'components/Capstone'
import ChatWindow from 'components/Chat/Window'

import 'styles/capstone.scss'

const App: React.FC = () => {
  return (
    <div className="capstone">
      <Capstone />
      <ChatWindow />
    </div>
  )
}


export default App