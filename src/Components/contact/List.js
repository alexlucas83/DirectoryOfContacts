import React, { Component , Fragment} from 'react'
import Contacts from "./Contacts"
import {Consumer} from '../../Context'

export default class List extends Component {


    // delete = (id) => {
    //     const newContacts = this.state.contacts.filter(contact =>
    //         contact.id !== id)
    //         this.setState({
    //             contacts : newContacts
    //         })
    // }
    render() {

        return (
            <Consumer>
                {value => {
                    return (
                        <Fragment>
                            <h1 className="display-4 my-4">Mes Contacts : </h1>
                        {value.contacts.map(contact => (
                            <Contacts 
                            key={contact.id}
                            id={contact.id}
                            nom={contact.nom}
                            email={contact.email}
                            tel={contact.tel}
                            deleteClick={() => {
                                // this.delete(contact.id)
                            }}
                            />
                        ))}
                    </Fragment>
        
                    )
                }}
            </Consumer>
        )


    }
}
