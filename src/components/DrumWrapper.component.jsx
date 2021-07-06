import React from 'react';
import './DrumWrapper.css'
import DrumItem from "./drum/DrumItem.component";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import {connect} from "react-redux";
import {setCard} from "../store/card/actions";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    line: {
        backgroundColor:'#FAE62D'
    }
});

const DrumWrapper = ({store, setCard}) => {
    const classes = useStyles();

    //PLAY ON KEYDOWN
    document.body.addEventListener('keyup', (e) =>{
        //letter from keyup
        let keyboardLetter = e.key.toUpperCase()
        //letters of audio ID from redux store
        let storeLetters = store.drum.cordsA.map(({ letter }) => letter)
        //audio to play
        const el = document.getElementById(keyboardLetter);

        if(el && storeLetters.indexOf(keyboardLetter) >= 0 && store.controller.power ) {
            //play audio
            el.parentNode.classList.add("::active")
            el.play()
            //stop propagation
            e.stopImmediatePropagation()
            //set name in controller
            setCard(el.parentNode.id)
        }
    });


    return (
        <Grid className="pad-bank" id="hexcontainer">
            {store.drum[store.controller.cord?"cordsB":"cordsA"].map((element, index) => ([
                <DrumItem key={element.name} name={element.name} audio={element.audio} letter={element.letter}/>,
                index === 2 || index === 6 ? <Divider className={classes.line} key={index}/> : '',
            ]))}
            <DrumItem name={'By Miloš Štrbo'}/>
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
)(DrumWrapper);
