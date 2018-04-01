import React from 'react';

class Posts extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount () {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then( function (response) {
                    return response.json();
                })
            .then(data => this.setState({
                posts: data
            }))

    }

    render() {

        const postItems = this.state.posts.map(post => (
            <div key={post.id} className="posts">
                <h3>{ post.title }</h3>
                <p> { post.body } </p>
            </div>
        ));
        return (
            <div>
                <h2>Posts</h2>
                { postItems }
            </div>
        );
    }
}

export default Posts;