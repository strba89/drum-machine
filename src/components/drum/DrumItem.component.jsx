import React from "react";
import {connect} from "react-redux";
import {setCard} from "../../store/card/actions";
import {Grid} from "@material-ui/core";


const DrumItem = ({name, letter, audio, store, setCard}) => {

    //PLAY ON CLICK

    const  Play = async () => {
        if(letter && store.controller.power) {
            await document.getElementById(letter).play();
        }
    }

    //SET VOLUME

    const audios = document.querySelectorAll("audio");
    if(audios){
        for( const audio of audios){
            audio.volume = store.controller.volume/100
        }
    }
    return (
        <Grid className='hex1'>
            <Grid className="hex2">
                <Grid className="drum-pad pulse-single" id={name.indexOf(' ') <= 0?name:'author'} onClick={()=> {Play(); setCard(name)}}>
                    {audio ? <audio className="clip" id={letter} src={audio}/> : ''}
                    <h3>{letter?letter:name}</h3>
                </Grid>
            </Grid>
        </Grid>
    )
}
const mapStateToProps = (state) =>
    {
        return {store: state}
    }
;
const mapDispatchToProps = dispatch => ({
    setCard: name => dispatch(setCard(name))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrumItem)