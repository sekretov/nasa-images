import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            'images': null
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <main className="container-fluid">
                <header className="row">
                    <div className="col"><h1>Nasa Images</h1></div>
                </header>
                <section className="row">
                    <Router>
                        <nav className="col-4">
                        </nav>
                        <article className="col">
                        </article>
                    </Router>
                </section>
            </main>
        );
    }
}

export default App;
