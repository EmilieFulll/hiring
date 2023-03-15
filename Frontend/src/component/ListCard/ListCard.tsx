import * as React from 'react';
// import Box from '@mui/material/Box';
import { CardProfil } from "../CardProfil/CardProfil";
import { NoFound } from '../../page/NoFound';


export const ListCard = (props : any): any => {
    const { items } = props
    if (items?.length > 0) {
        console.log(items)
        return items.map((card: Object) => {
            return <div className='column'>
                <CardProfil value={card} key={card.toString()} />
            </div>
        })       
    } else {
        return <NoFound/>
    }
   
}