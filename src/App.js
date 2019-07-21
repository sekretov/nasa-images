import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import NasaImage from './NasaImage'
import NasaImageList from './NasaImageList'

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            'images': null
        };
    }

    componentDidMount() {
        fetch('https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    'images': data.collection.items
                });
            });
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
                            <NasaImageList images={this.state.images} />
                        </nav>
                        <article className="col">
                            <Route path="/image/:nasa_id" component={NasaImage} />
                        </article>
                    </Router>
                </section>
            </main>
        );
    }
}

export default App;
