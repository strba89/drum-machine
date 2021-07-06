import React, {useEffect}  from 'react';
import {connect} from "react-redux";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import {Typography} from "@material-ui/core";
import Switch from '@material-ui/core/Switch';
import {Paper} from "@material-ui/core";
import VolumeComponent from "./controller/Volume.component";
import {setController} from "../store/controller/actions";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    header:{
        color:'#191414',
        userSelect: 'none'
},
    drumBox:{
        marginBottom: '2.5em',
        marginTop: '2.5em',
        padding: '2.5em',
        backgroundColor: '#f59b23',
        color: "#191414"
    },
    drumName: {
        marginBottom: '2.5em',
        marginTop: '2.5em',
        padding: '2.5em',
        backgroundColor: '#191414',
        color: "#f59b23"
    },
    author:{
        marginTop: '2.5em',
        color:"#191414"
    },
    power: {
        marginBottom: '1.5em',
    },
    cord:{
        marginTop: '1.5em'
    }
}));
const Controller = ({store, setController}) =>{
    const [state, setState] = React.useState({
        power: store.controller.power,
        cord: store.controller.cord,
        volume: store.controller.volume
    });
    const getData = (val) =>{
        setState({ ...state, volume: val })

    }
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    useEffect(() => {
        setController(state)
    },
        // eslint-disable-next-line
        [state]);
    const classes = useStyles();

    return(
        <FormControl component="fieldset">
            <Paper elevation={3} className={classes.drumBox}>
            <FormLabel component="legend" >
                <Typography variant="h5" className={classes.header}> Drum Machine Controller</Typography>
            </FormLabel>
            <FormGroup>
                <Paper elevation={3} className={classes.drumName} id="display">
                    {store.card.name}
                </Paper>
                <FormControlLabel
                    className={classes.power}
                    control={<Switch checked={state.power} onChange={handleChange} name="power" />}
                    label="Power"
                />
                <VolumeComponent sendData={getData}/>
                <FormControlLabel
                    className={classes.cord}
                    control={<Switch checked={state.cord} onChange={handleChange} name="cord" />}
                    label="Cord"
                />
            </FormGroup>
            <FormHelperText className={classes.author}>by Miloš Štrbo</FormHelperText>
            </Paper>
        </FormControl>
    )}
const mapDispatchToProps = dispatch => ({
    setController: controller => dispatch(setController(controller))
});
const mapStateToProps = (state) => {
    return {store: state}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Controller);
