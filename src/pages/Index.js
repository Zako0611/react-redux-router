import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [
                { cid: 111, title: "personal blog - 1" },
                { cid: 112, title: "personal blog - 2" },
                { cid: 113, title: "personal blog - 3" }
            ]
        }
        this.props.history.push("/home/")
    }
    render() {
        return (
            <div>
                {/* <Redirect to="/home/"/> */}
                <h2>Zako.com</h2>
                <ul>
                    {this.state.list.map((item, index) =>
                        <li key={index}>
                            <Link to={"/list/" + item.cid}>
                                {item.title}
                            </Link>
                        </li>)}
                </ul>
            </div>
        );
    }
}

export default Index;