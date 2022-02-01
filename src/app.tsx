import React, { useState } from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'

import Capstone from 'components/Capstone/Capstone'
import Chatter from 'components/Chatter/Chatter'

import 'styles/capstone/capstone.scss'

/*
Author:     Kyle Caprio
Purpose:    Web Application entry point
Input:      none
Output:     Capstone and Chatter
*/

const App: React.FC = () => {
  // Database simulation via browser local storage
  const [LsRatings] = useLocalStorage('KC-Capstone-Ratings')
  const [LsFeedback] = useLocalStorage('KC-Capstone-Feedbacks')

  const [submissions, setSubmissions] = useState<Submissions>({
    ratings: LsRatings,
    feedback: LsFeedback
  })

  function onSubmission(data: any) {
    // Chatter callback to update out-of-chat submission state when user makes subission

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