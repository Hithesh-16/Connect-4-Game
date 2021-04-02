import React from "react";
import Game from './Game';
import './Player.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {player1:"" , player2:"" , color1:"", color2: "", result:""}
    }
    render()
    {
        return (
            <div>
                
            <h2>Player</h2>
            <div id="inputF">
            <b>Player-1: </b><input type='text'  onChange={this.setPlayer1} id= 'player1' value={this.state.player1} placeholder='Enter Player1 Name'/><br/>
            <b>Colour-1: </b><input type='text' onChange={this.setColor1} id= 'color1' value={this.state.color1} placeholder='Enter Player1 Color'/><br/>
            <b>Player-2: </b><input type='text' onChange={this.setPlayer2} id= 'player2' value={this.state.player2} placeholder='Enter Player2 Name'/><br/>      
            <b>Colour-2: </b><input type='text' onChange={this.setColor2} id= 'color2' value={this.state.color2} placeholder='Enter Player2 Color'/><br/>
            <br/>
            <br/>
            </div>
            <Router>
                <Link to="/Game"><button className="button" onClick={this.enter}><span>Start Game</span></button></Link><br/><br/>
                <h1 className="header">{this.state.result}</h1>
                <Switch>
                <Route path="/Game">
                <Game player1={this.state.player1} player2={this.state.player2} color1={this.state.color1} color2={this.state.color2}/>
                </Route>
                </Switch>
            </Router>           
            
            </div>
        );
    }
    setColor1 =(e)=>{ this.setState({color1:e.target.value}); }
    setColor2 =(e)=>{ this.setState({color2:e.target.value});e.target.value="" }
    setPlayer1 =(e)=>{ this.setState({player1:e.target.value});e.target.value=""}
    setPlayer2 =(e)=>{ this.setState({player2:e.target.value}); e.target.value=""}
    enter = () => {
            
        this.setState({result:this.state.player1+": "+this.state.color1+" & "+this.state.player2+": "+this.state.color2})
        // this.setState({player1:"", color1:"", player2:"", color2:""})
    }
}
export default Player;
