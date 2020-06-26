import React from 'react'
import axios from 'axios'
import Post from './posts'

class PostList extends React.Component{
    constructor(props){
        super(props)
    
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        const self=this
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then (function(res){
            var postsData=res.data
            self.setState({
                posts: postsData
            })
        })
        .catch(function(err) {
            console.log(err)
        })
    }
    render(){
        // console.log(this)
        const state = this.state
        const posts = state.posts

         return <div>
             {posts.map(function(it) {
                 var header = it.header
                 var body = it.body
                 var meta= it.meta
                 return<Post meta={meta} header={header} body={body}/>
                 })}
                </div>
    }
}

export default PostList