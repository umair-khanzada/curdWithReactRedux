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

        const apiHit = (
            <div className="loading">
                <i className="fa fa-circle-o-notch fa-spin"></i>
                <p>Please wait fetching games for you!</p>
            </div>
        );

        const success = (
            this.props.games.games.map((obj, i) => <div key={i} className="dataList">{obj.message}</div> )
        );

        const error = (
            <div>Something went wrong please check you internet connection.</div>
        );

        return (
            <div className="games">
                { this.props.games.loading ? apiHit : this.props.games.games.length ? success : error }
            </div>
        );

    }
}

Games.propTypes = {
  games: React.PropTypes.object.isRequired,
  fetchGames: React.PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        games: state.games
    }
}
export default connect(mapStateToProps, {fetchGames})(Games);
