import React, { useState } from 'react'
import Modal from './modal'
import './styles.css'

const ModalTest = () => {
    const [ showModal, setShowModal ] = useState( false );

    const toggleModal = () => {
        setShowModal( !showModal );
    };

    const toggleCloseModal = () => {
        setShowModal( false );
    }

    const style = {
        container: {
            background: "lightgreen",
            height: "20rem"
        },
        button: {
            cursor: "Pointer",
            padding: ".2em .5em",
            fontSize: "1.4rem",
            border: "2px solid darkblue",
            color: "#000",
            boxShadow: "0 0 1em #ccc",
            marginTop: "2em"
        }
    }
    return (
        <div style={ style.container }>
            <button onClick={ () => toggleModal() } style={ style.button }>
                Open Modal
            </button>

            {
                showModal && <Modal toggleClose={ toggleCloseModal } />
            }
        </div>
    )
}

export default ModalTest