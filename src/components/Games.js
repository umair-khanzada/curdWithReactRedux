/**
 * Created by UmairAhmed on 2/13/2017.
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchGames from '../action.js';

class Games extends Component {
    componentDidMount(){
        this.props.fetchGames()
    }

    render() {
        console.log("this.props.games", this.props.games)
        const emptyGameMessage = (<span>Sorry there are no games available.</span>);
        const gameList = (
            this.props.games.map((obj, i) => <div key={i}>{i}</div> )
        );
        return (
            <div>
                <h2>
                    {this.props.games.length ? gameList : emptyGameMessage}
                </h2>
            </div>
        );
    }
}

Games.propTypes = {
  games: React.PropTypes.array.isRequired,
  fetchGames: React.PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        games: state.games
    }
}
export default connect(mapStateToProps, {fetchGames})(Games);
