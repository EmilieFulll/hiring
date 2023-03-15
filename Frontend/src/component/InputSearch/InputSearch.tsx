import { useState } from 'react';
// import TextField from '@mui/material/TextField';
import { ListCard } from '../ListCard/ListCard';
import './InputSearch.css';
import researchResult from '../../interfaces';


export const InputSearch = () => {
    const research = (e: any) => {
        const searchValue = e.target.value;
        const url =`https://api.github.com/search/users?q=${searchValue}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
                setUsers(data);
            })
            .catch((err) => {
                console.log(err.message);
        });
    }
    const [users, setUsers] = useState<researchResult>();
    
    return (
        <div>
            <div className='row'>
                {/* <TextField 
                    id="" 
                    margin='normal' 
                    label="Search" 
                    variant="outlined" 
                    onChange={research}
                /> */}
                <input id='inputSearch'
                placeholder='Search'
                onChange={research}
                />
            </div>
            <div className='row'>
                <div className='column'>
                    {/* <input type='checkbox'/> */}
                </div>
                <div className='column'></div>
                <div className='column'>
                    {/* <button></button>
                    <button><i className="fa fa-close"></i></button> */}
                </div>
            </div>
            <div id='boxList' className='row'>
                <ListCard items={users?.items} />
            </div>
        </div>
    )
}

