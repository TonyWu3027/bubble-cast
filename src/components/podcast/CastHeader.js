import React, {Component} from 'react';
//import { aPlay, FaPause, FaFastForward, FaFastBackward } from 'react-icons/fa';
import {PlayerIcon} from 'react-player-controls';




class CastHeader extends Component{
  render() {
    return(
        <div className="container">
          <div className="card cast-header">
            <div className="card-body">
              <div className = "row">
                <div className = "col-md-8">
                  <h4 className="card-title">a16z - Technology & the environment </h4>
                  <p className="card-text text-muted">Sonal Chokshi, Marc Andreessen & Andrew McAfee</p>
                  <p className="card-text text-muted" style={{fontSize : "10pt"}}>It used to be that the only way for humanity to grow — and progress — was through destroying the environment. But is this interplay between human growth vs. environment really a zero-sum game? Even if it were true in history, is it true today?... </p>
                </div>
                <div className = "col-md-4">
                    <div className="col-md-6 ">
                      <img src = {require('./268x0w.jpg')} className = "castpic" alt = "Podcast Pic" />
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>

    );
  }
}

export default CastHeader;
