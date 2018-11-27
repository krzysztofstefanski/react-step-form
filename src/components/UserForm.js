import React, { Component } from 'react'

export class UserForm extends Component {
state = {
    step:1,
    firstName:'',
    lastName:'',
    email:'',
    occupation:'',
    city:'',
    bio:''
}
//Proced to next step
nextStep = () => {
    const {step} = this.state
    this.setState({step : step + 1
})
}
//Proced to previous step

prevStep = () => {
    const {step} = this.state
    this.setState({step : step - 1
})
}

//Handle fields change
handleChange = input => e => {
    this.setState({[input]: e.target})
}

}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default UserForm
