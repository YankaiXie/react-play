import React from'react'

class Adding extends React.Component{
    render(){
        const props=this.props
        const numberOne=props.numberOne
        const numberTwo=props.numberTwo
        return <div>{numberOne + numberTwo}</div>

    }    

    
}
export default Adding 