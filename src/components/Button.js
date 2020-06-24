import React from 'react'
import { Button } from 'semantic-ui-react'

class ButtonExampleColored extends React.Component {
    render() {
        const color=this.props.color
        return <div>
            <Button color={color}>Red</Button>
            <Button color={color}>Orange</Button>
            <Button color={color}>Yellow</Button>
            <Button color={color}>Olive</Button>
            <Button color={color}>Green</Button>
            <Button color={color}>Teal</Button>
            <Button color={color}>Blue</Button>
            <Button color={color}>Violet</Button>
            <Button color={color}>Purple</Button>
            <Button color={color}>Pink</Button>
            <Button color={color}>Brown</Button>
            <Button color={color}>Grey</Button>
            <Button color={color}>Black</Button>
        </div>
    }
}


export default ButtonExampleColored