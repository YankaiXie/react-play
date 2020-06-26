import React from "react"
import axios from "axios"
import Task from './Task'

class TaskList extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            tasks: []
        }
    }

    componentDidMount(){
       const self = this

       console.log(self.state)
       axios.get("http://jsonplaceholder.typicode.com/todos")
        .then(function(res){
            var tasksData = res.data

            self.setState({
                tasks: tasksData
            })
        })
        .catch(function(err) {
            console.log(err)
        })
    }
    render(){
        console.log(this)
        const state = this.state
        const tasks = state.tasks

        return <div>
            {tasks.map(function(it) {
                var title = it.title
                var completed = it.completed
                var id = it.id
                return <Task key={id} title={title} completed={completed}/>
            })}


        </div>
    }
}
export default TaskList