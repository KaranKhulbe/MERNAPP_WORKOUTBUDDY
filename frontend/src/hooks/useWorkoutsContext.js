import { WorkoutsContext} from '../context/WorkoutContext'
import { useContext } from 'react'
 export const useWorkoutsContext =()=>{
    const context = useContext(WorkoutsContext)
    if(!context){
        throw Error('useWorkouts context must be used inside an workoutsContextProvider')
    }
    return context
 }