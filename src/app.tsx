import React, { useState } from 'react'

import Capstone from 'components/Capstone'
import Chatter from 'components/Chatter'

import 'styles/capstone.scss'
import { useLocalStorage } from 'hooks/useLocalStorage'

const App: React.FC = () => {
  const [LsRatings] = useLocalStorage('KC-Capstone-Ratings')
  const [LsFeedback] = useLocalStorage('KC-Capstone-Feedbacks')

  const [submissions, setSubmissions] = useState<Submissions>({
    ratings: LsRatings,
    feedback: LsFeedback
  })

  function onSubmission(data: any) {
    console.log({ NewSubmission: data })
    setSubmissions({ ...submissions, ...data })
  }

  return (
    <>
      <Capstone submissions={submissions} />
      <Chatter onSubmission={onSubmission} />
    </>
  )
}

export default App