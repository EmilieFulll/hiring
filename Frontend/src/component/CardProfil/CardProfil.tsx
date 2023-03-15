import * as React from 'react';
import './CardProfil.css';
// import {Card, CardActions, CardContent, Button } from '@mui/material';

export const CardProfil = (props: any):any => {
    const { value } = props
    console.log(value)
    return (
        // <Card>
        //     <CardContent>
        //         ID 
        //         login
        //     </CardContent>
        //     <CardActions>
        //         <Button variant="contained" >View Profile</Button>
        //     </CardActions>
        // </Card>
        <div id='Card' >
            {/* <input type='checkbox'
            className='checkBox' 
            onClick={() => {

            }} /> */}
            <div id='CardHeader'>
                <img className='avatar' alt="avatar" src={value.avatar_url}   />
            </div>
            <div id='CardContent'>
                <h6>{value.id}</h6>
                <p>{value.login}</p>
            </div>
            <div id='CardAction'>
                <button id='ViewProfilBtn'>View profile</button>
            </div>
        </div>
    )
}