import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DrumWrapper from "../components/DrumWrapper.component";
import Controller from "../components/Controller.component";
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    }
}));

const Main = () => {
    const classes = useStyles();
    return(
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                className={classes.root}
            >
                <Grid item xs={8} id="drum-machine">
                    <DrumWrapper/>
                </Grid>
                <Grid item xs={4}>
                    <Controller/>
                </Grid>
            </Grid>
    )
}
export default Main