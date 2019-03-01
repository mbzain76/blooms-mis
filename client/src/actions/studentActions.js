export const UPDATE_STUDENT = 'students:updateStudent';


export function updateStudent(newStudent)
{
    return {
        type: UPDATE_STUDENT,
        payload: {
            student: newStudent
        }
    }
}