import React from'react'
import {Card} from'semantic-ui-react'

class post extends React.Component{
    render(){
        const props=this.props
        const title=props.title
        const body=props.body
        const Id=props.userId
        console.log(props,75765757)
        return<Card
        link
        header={title}
        meta={Id}
        description={body}/>
    }

}
export default post