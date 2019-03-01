
import { Provider, Subscribe, Container } from 'unstated';
import React from 'react';


class InfoContainer extends Container {
    state = { student: {
        firstName: "",
        middleName: "",
        lastName: ""
    },
                emailSelected: {}
};
    addSelectedEmails = (emails) =>{
        this.setState({ emailSelected: emails
        })

        console.log(this.state.emailSelected)
    }

  

}
export default InfoContainer;
