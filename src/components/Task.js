import React from"react"
import { Button } from 'semantic-ui-react'
class Task extends React.Component{
    render(){
        const props=this.props
        const title=props.title
        const completed=props.completed 

        let color = 'grey'

        if ( completed ) {
            color = 'red'
        }

       return <div>
           <Button color={color} fluid={true}>{title}</Button>
        </div>
    }
}

export default Task