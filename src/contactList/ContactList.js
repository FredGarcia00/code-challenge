import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';

import './ContactList.css'


function ContactList({users}) {
  const [filterName, setFilterName ] = useState('')
  const [filterPhoneNumber, setFilterPhoneNumber ] = useState('')
 
    return (
        <div className="contactList">
            <div className="contactList__input">
            <TextField
            id="outlined-basic" 
            className="contactList__input"
            variant="outlined"
            label="Enter a name"
            value={filterName} 
            onChange={e => setFilterName(e.target.value)}
            />
            <TextField
            className="contactList__input"
            variant="outlined"
            id="outlined-basic" 
            label="i.e. 555-5555555"
            value={filterPhoneNumber} 
            onChange={e => setFilterPhoneNumber(e.target.value)}
            />
            </div>
            <hr/>
            <ul className="contactList__contacts">
                {users.filter(name => {
                //remove names that do not match current filter text
                return name.name.toLowerCase().indexOf(filterName.toLowerCase()) >= 0 && 
                name.phone.toLowerCase().indexOf(filterPhoneNumber.toLowerCase()) >= 0
                })
                .map((user) => (
                <li key={user.phone} 
                    className="contactList__list">
                    <ListItem button>
                        <div className="contactList__info">
                        <div className="contactList__name">
                         name: {user.name} 
                        </div>
                        <div className="contactList__number">
                         number: {user.phone}
                        </div>
                        </div>
                    </ListItem>
                    <hr/>
                </li>
                ))}
            </ul>
            
        </div>
    )
}

export default ContactList
