import React from 'react';
import './App.css';
import Weather from './Weather'
// import Transitionlearn from './transitionlearn'
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            api: '//api.openweathermap.org/data/2.5/weather?q=',
            apiKey: '0c3726306434398464920f4a294015b0',
            load: false,
            title: 'Weather App',
            city: 'Bucharest',
            lang: 'RO',
            wheater: '',
            long: '',
            lat: '',
            zoom: 19,
        }
        this.getWeather = this.getWeather.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.fetchData = this.fetchData.bind(this)
        this.onViewportChanged = this.onViewportChanged.bind(this)
    }
    async fetchData(mod) {
        let request
        if (mod === 2) {
            request = (this.state.api + '&appid=' + this.state.apiKey + '&lang=' + this.state.lang + '&lon=' + this.state.long + '&lat=' + this.state.lat + '&units=metric')
        } else {
            request = (this.state.api + this.state.city + '&appid=' + this.state.apiKey + '&lang=' + this.state.lang + '&units=metric')
        }
        const response = await fetch(request)
        const json = await response.json();
        if (json.cod === 200) {
            this.setState({
                weather: json,
                load: true
            })
        } else {
            alert("COD:" + json.cod + '\n' + json.message)
        }
    }
    componentDidMount() {
        this.fetchData(1);
    }
    getWeather() {
        this.fetchData(1);
    }
    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onViewportChanged(viewport) {
        let { center, zoom } = viewport
        let [lat, long] = center
        this.setState({
            lat: lat,
            long: long,
            zoom: zoom
        })
        this.fetchData(2)
    }
    render() {
        return (
            <div className="app">
                <div className="header">
                    <div className="container">
                        <h1>{this.state.title}</h1>
                        <p>Powered by OpenWeather & T.Valentin</p>
                        <select onChange={this.handleInput} name="lang">
                            <option value="RO">Romana</option>
                            <option value="EN">English</option>
                            <option value="RU">Russian</option>
                        </select>
                    </div>
                </div>
                <div className="body">
                    <div className="container">
                        <label htmlFor="city">
                        </label>
                        <div className="wrapper">
                            <div className="grid">
                                <div className="grid__col grid__col--1-of-2 grid__col--xl-1-of-1 grid__col--m-1-of-1 bycoord">
                                    <h2>By coordonate</h2>
                                    <label htmlFor="lat"><input placeholder="lat" type="number" id="lat" name="lat" onChange={this.handleInput} min="1" /></label>
                                    <label htmlFor="long"><input placeholder="long" type="number" id="long" onChange={this.handleInput} name="long" min="1" /></label>
                                    <button onClick={() => this.fetchData(2)}>Set</button>
                                </div>
                                <div className="grid__col grid__col--1-of-2 grid__col--xl-1-of-1 grid__col--m-1-of-1 byname">
                                    <h2>By city name</h2>
                                    <input onChange={(e) => this.handleInput(e)} placeholder="City" id="city" name="city" type="text" />
                                    <button onClick={this.getWeather}>Set</button>
                                </div>
                            </div>
                        </div>
                        {this.state.load ? <Weather view={this.onViewportChanged} zoom={this.state.zoom} weather={this.state.weather} city={this.state.city} /> : ''}
                    </div>
                </div>
                <div className="footer">
                    <div className="container">
                        <h3>Weather App v1 © T.Valentin</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;