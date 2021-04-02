import React from "react";
import './Home.css';
export default function Home() {
    return(
      <div >
      <h2>Home</h2>
     
      <ul className="transparentBox">
       
          <li className = "li">Connect Four  is a two-player connection board game,in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid.</li>
          <li className = "li"> The pieces fall straight down, occupying the lowest available space within the column.</li>
          <li className = "li"> The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.</li> 
          <li className = "li">Connect Four is a solved game. </li>

      
            </ul>
            <div id="gif">
      {/* <img src="gameG.gif" /> */}
      <img alt="" class="uc us fk es eo jn w c" width="500" height="448" role="presentation" src="https://miro.medium.com/max/625/1*y7-nEg00W1S61elPMoOfAA.gif" srcset="https://miro.medium.com/max/345/1*y7-nEg00W1S61elPMoOfAA.gif 276w, https://miro.medium.com/max/625/1*y7-nEg00W1S61elPMoOfAA.gif 500w" sizes="500px"></img>

      </div>
      </div>
    );
}