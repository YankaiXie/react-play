import React from 'react' 

class HelloWorld extends React.Component{
    render(){
        console.log(this.props)
        const props=this.props
        const name=props.name
        const greetings=props.greetings

        return <div> <span style={{ color: props.color}}>{greetings}</span>, {name}</div>
    }
} 

export default HelloWorld