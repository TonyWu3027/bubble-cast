import React, {Component} from 'react';
import CastHeader from './CastHeader';
import CastController from './CastController';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import WaveForm from './WaveForm'
import waves from "./waveform.json"

class Podcast extends Component {

  constructor () {
    super();
    this.state = {
      bars : waves,
    };

  }

  createWave(t){
    let tempBars = this.state.bars;

    var n = "bar"+ (Math.floor(Math.random() * (24 - 3) ) + 3).toString();

    tempBars.shift();
    // add event
    if (t == 5){
      tempBars.push({bar:n+" intro", event:'INTRO', src:"Andrew.png",heading:"Andrew McAfee",text:"Andrew McAfee is the Co-Founder and Co-Director of the Initiative on the Digital Economy and a Principal Research Scientist at the MIT Sloan School of Management. He studies how digital technologies are changing the world. His new book More From Less: How We Finally Learned to Prosper Using Fewer Resources - and What Happens Next will be published by Scribner in fall of 2019.",link:"https://andrewmcafee.org/about"});
    } else if (t == 26) {
      tempBars.push({bar:n+" more", event:'MORE', src:"more.png",heading:"More From Less",text:"Bestselling author and co-director of the MIT Initiative on the Digital Economy Andrew McAfee says there’s a new reason for optimism: we’re past the point of 'peak stuff' - from here on out, it’ll take fewer resources to make things, and cost less to lead a comfortable life. This turn of events invalidates the predictions of overpopulation alarmists and those who argue we need to drastically reduce our conception of how much is enough. What has made this turnabout possible? One thing primarily: the collaboration between technology and capitalism. ",link:"https://www.amazon.co.uk/Post-Peak-Finally-Stopped-Using-Happens/dp/1471180336/ref=sr_1_1?keywords=more+from+less&qid=1581244098&sr=8-1"});
    } else if (t == 55) {
      tempBars.push({bar:n+" final", event:'FINAL', src: "final.png",heading:"Is sustainable capitalism possible?",text:"The subtitle of Joel Kovel's The Enemy of Nature (Zed Books, 2007) states his thesis bluntly: The End of Capitalism or the End of the World?. Kovel thinks we need a revolution—although he is fully cognizant as to how remote that prospect seems. Paul Hawken, Amory Lovins and Hunter Lovins also think we need a revolution, but of a different sort than the one envisaged by Kovel. Natural Capitalism (Little, Brown, 1999) is subtitled Creating the Next Industrial Revolution. Then-President Clinton is reported to have called it one of the five most important books in the world today.",link:"https://www.sciencedirect.com/science/article/pii/S1877042810011547"});
    } else {
      tempBars.push({bar:n});
    }

    this.setState({
      bars : tempBars,
    })
  }

  render () {
    //console.log(window.innerWidth);
    console.dir(this.state.bars)

    return (
      <div>
        <CastHeader />
        <CastController />

        <div className="container">
        <AudioPlayer
            autoPlay
            src="https://cdn.simplecast.com/audio/3f86df/3f86df7b-51c6-4101-88a2-550dba782de8/9e7f7c1a-f90f-4315-b184-25d8de0723db/2019-10-03-andrew-mcafee-v1-sm_tc.mp3"
            onPlay={e => console.log("onPlay")}
            onListen = {t => this.createWave(parseInt(t))}
            // other props here
        />
        </div>


        <WaveForm bars = {this.state.bars} />
      </div>
    );
  }
}

export default Podcast;
