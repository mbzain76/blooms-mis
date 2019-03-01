import { UPDATE_STUDENT} from '../actions/studentActions';
export default function studentReducer(state = {

}, action)
{
    switch(action.type){
        case UPDATE_STUDENT:
        return {...state,
            pupil: action.payload.student,
         
        }
        default: 
        return state;
    }
 
}