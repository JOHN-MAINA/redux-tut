import React from 'react';

class PostForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
          title: this.state.title,
          body: this.state.body
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post),
        })
            .then(resp => resp.json())
            .then( data => {
                console.log(data);
            });

    }

    onChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        return (
            <div>
                <h2>Add Post</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text" placeholder="Title" name="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label >Body:</label>
                        <textarea name="body" onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;