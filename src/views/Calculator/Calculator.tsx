import { useCallback, useContext } from 'react'
import { Paper, Typography } from '@mui/material'
import { ExerciseCalculatorForm } from './partials/ExerciseCalculatorForm'
import { type CalculatorFields } from 'contexts/ExercisesContext/ExercisesContext.types'
import { ExercisesContext } from 'contexts/ExercisesContext/ExercisesContext'
import { CalculatorResult } from '../CalculatorResult/CalculatorResult'
import { Details } from './partials/Details'

export const Calculator = () => {
  const { setCalculatorExercise } = useContext(ExercisesContext)

  const onSubmit = useCallback((data: CalculatorFields) => {
    setCalculatorExercise(data)
  }, [])

  return (
        <Paper sx={{ marginLeft: 10, padding: 4 }}>
            <Typography variant='h1' color='primary' my={2}>Calories Burned Calculator</Typography>
            <ExerciseCalculatorForm onSubmitRequest={onSubmit}/>
            <CalculatorResult/>
            <Details/>
        </Paper>
  )
}
