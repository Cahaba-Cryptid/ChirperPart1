import React, { Component } from 'react';
import NavBar from './NavBar';
import Timeline from './Timeline';

let currentChirps = [
    {
        chirp: 'A well a everybody\'s heard about the bird\nb-b-b bird,bird, bird, b-bird\'s the word\nA well a bird, bird, bird, the bird is the word\nA well a bird, bird, bird, well the bird is the word\nA well a bird, bird, bird, b-bird\'s the word'
    },
    {
        chirp: 'Pa pa pa pa, pa pa pa pa, pa pa pa pa, pa pa pa pa\nPa pa pa pa, pa pa pa pa, pa pa pa pa\nPapa, ooma mow mow\nPapa, ooma mow mow'
    },
    {
        chirp: 'A well a ooma mow mow\nPapa ooma mow mow\nPapa ooma mow mow\nPapa ooma mow mow\nPapa ooma mow mow\nPapa ooma mow mow\nPapa ooma mow mow'
    }
];



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirp: '',
            chirps: [],
        };
    }

    componentDidMount() {
        this.setState({ chirps: currentChirps });
    }

    submitChirp(e) {
        e.preventDefault();

        let chirps = this.state.chirps
        let chirp = {
            chirp: this.state.chirp
        }
        
        
        chirps.unshift(chirp);

        this.setState({
            chirp: '',
            chirps: chirps
        });
    }

    render() {
        return (
            <>
                <NavBar className="row" />
                <form className="row ml-2">
                    <div className="col-10 form-group shadow p-3 m-3 bg-white rounded border border-secondary">
                        <label>Bird is the word...</label>
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Chirp your heart out!"
                            value={this.state.chirp}
                            onChange={event => this.setState({ chirp: event.target.value })}
                        />
                        <button
                            onClick={(e) => this.submitChirp(e)}
                            type="submit"
                            className="btn btn-primary mt-2">CHIRP-CHIRP</button>
                    </div>
                </form>

                <Timeline chirps={this.state.chirps} />

            </>
        )
    }
}

export default App;