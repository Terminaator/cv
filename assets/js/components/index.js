import React, {Component} from "react"
import ReactDOM from "react-dom"




export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transform: 0
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.myRef = React.createRef();



    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        this.setState({
           transform: window.scrollY
        });
        var object = this.refs.Progress1;
        console.log(window.scrollY > object.getBoundingClientRect().top);

    }
    
    render() {
        return (
            <div>
                <header className="bird-box">
                    <div className="back-bird" style={{transform:`translate(0px, ${this.state.transform/4}%)`}}></div>
                    <div className="logo" style={{transform:`translate(0px, ${this.state.transform/2}%)`}}></div>
                    <div className="fore-bird" style={{transform:`translate(0px, ${this.state.transform/40}%)`}}></div>
                </header>
                <section className="content">
                    <article>
                        <h1  ref="Progress1" >Unique Style</h1>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in 
                            culpa.</p>
                    </article>
                </section>
                <section className="content">
                    <article>
                        <h1>Unique Style</h1>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in 
                            culpa.</p>
                    </article>
                </section>
            </div>
        );
    }
}


window.onload = () => {
    ReactDOM.render(<App />, document.getElementById("hello-react"))
}
