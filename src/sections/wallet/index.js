import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';

// Reac Loader spinners
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";

import * as React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

import ArrowForward from '@mui/icons-material/ArrowForward';

import Loader from "../../components/loader"
import { Icon } from '@mui/material';

const Heading = styled('h1')(({ theme }) => ({
    color: "#333333",
    padding: theme.spacing(0),
    fontWeight: 900,
    fontSize: '35px'

}));

const SubHeading = styled('h3')(({ theme }) => ({
    color: "#333333",
    padding: theme.spacing(1),
    fontSize: '18px',
    fontWeight: 500
}));

// mui styled
const SubmitButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#9F2C2C",
    color: "white",
    padding: 10,
    borderRadius: "8px",
    height: "50px",
    fontWeight: 800,
    width: "10%",
    marginLeft: 40,
    '&:hover':
    {
        backgroundColor: 'rgb(40, 57, 71, .6)',
        boxShadow: "1px 1px 20px #00000050",
    },
    '@media (max-width: 800px)': {
        width: '90%'
    }
}))


const WalletContent = () => {

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return (<>   <Grid item xl={3} >

        <Paper
            elevation={6}
            sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',

                alignItems: 'flex-start',
                justifyContent: 'center'
            }}
        >
            <SubHeading>
                MARS Balance
            </SubHeading>

            <div>
                <h4> 0.00 MARS</h4>
            </div>










        </Paper>



    </Grid>
        <Grid item xl={6} >


            <Paper
                elevation={6}
                sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',

                    alignItems: 'flex-start',
                    justifyContent: 'center'
                }}
            >
                <SubHeading>
                    Receive Address
                </SubHeading>

                <div>
                    <h4>MKT4ENsJGMu9XfK2D5QuC2JiQv5Z3PXd34Q</h4>
                </div>




                <div>

                </div>




            </Paper>



        </Grid>
        <Grid item xl={8} >


            <Paper
                elevation={6}
                sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',

                    alignItems: 'flex-start',
                }}
            >

                <SubHeading>
                    Send MARS
                </SubHeading>





                <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%"}}>
                    <TextField sx={{ m: 1, width: 450 }} label="Destination Address" variant="outlined" />



                    <FormControl  sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount" >Amount</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={values.amount}
                            onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Amount"
                            placeholder='0.00'  
                        />
                        

                    </FormControl>
                    <SubmitButton>
                    Send                    <ArrowForward/>
                </SubmitButton>


                </div>




            </Paper>


        </Grid></>)
}


const Wallet = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#9F2C2C");

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: "rgb(40, 57, 71)";
  `;



    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3000)

    })


    return (<>
        {/* <div>
            <Heading> Welcome To Your Wallet </Heading>
            <SubHeading>Create new local wallet OR login to an existing wallet</SubHeading>
        </div>             */}



        {/* {loading ? <RingLoader color={color} loading={loading} size={150} css={override} /> : <WalletContent />} */}

        {loading ? <Loader/> : <WalletContent />}

    </>)
}

export default Wallet