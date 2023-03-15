import * as React from 'react';
import { CardProfil } from "../CardProfil/CardProfil";
import { NoFound } from '../../page/NoFound';


export const ListCard = (props : any): any => {
    const { items, checkAll, search } = props
    if (items?.length > 0) {
        return items.map((card: Object) => {
            return <div className='column'>
                <CardProfil 
                    value={card} 
                    key={card.toString()} 
                    checkAll={checkAll}
                />
            </div>
        })       
    } else if (search !== "" && items?.length === 0) {
        return <NoFound/>
    } else {
        return 'Liste des Users'
    }
}