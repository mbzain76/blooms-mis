import React , {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component{
    state={
        student: {
            firstName: 'Brian',
            middleName: 'gach',
            lastName: 'mungai',
            class: 'day care',
            sex: 'male',
            dateOfBirth: '22/22/22',
            nationality: 'kenyan',
            residentialAddress: 'fyu',
            pickingPoint: 'no',
            fatherFirstName: 'ma',
            fatherMiddleName: 'lp',
            fatherLastName: '',
            fatherContact: '',
            motherFirstName: '',    
            motherMiddleName: '',    
            motherLastName: '',       
            motherContact: '' ,    
            email: '',
            postalAddress: '',
            doctorContact:'' ,
            doctorName: '',
            photoURL: '',
            termFeesPayer: '',
            termFeesPayerNumber: '' ,
            feePaid: '',
            termFeesTotal: '',
            prefferedHospital:'' ,
            doctorEmail: '',
            guardianName: '',
            guardianContact: '' ,
            tuition: 0,
            lunch: 0,
            swimming: 0,
            horseRiding:0 ,
            halfDayCare: 0,
            fullDayCare: 0,
            annualInsurance: 0,
            piano: 0,
            guitar: 0,
            skating: 0,
            taekwondo:0 ,
            ballet: 0,
            tennis: 0,
            transportZone1:0 ,    
            transportZone2: 0,    
            transportZone3: 0,       
            transportZone4: 0,    
            transportZone5: 10,
            transportZone6: 12,
            termTotal: 21,
            previousTermBalance:32 ,
            amountPaid: 100
           
        }
    }

    render(){
        return(
            <Context.Provider value={{
                state: this.state,
                getInput: (vals)=>{
                       this.setState({student: vals}, () =>{
                           console.log(this.state)
                       })
                }
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;