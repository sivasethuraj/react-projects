import React, { useState } from 'react'

import "./styles.css"
import QRCode from 'react-qr-code'

const QrCodeGenerator = () => {

    const [ qrCode, setQrCode ] = useState( '' );
    const [ input, setInput ] = useState( '' );

    const generateQrCode = () => {
        setQrCode( input );
        setInput( '' );
    };

    return (
        <div>
            <h1>QrCodeGenerator</h1>
            <div style={ { marginBottom: "2em" } }>
                <input type="text" name="qr-code" placeholder='Enter your value here'
                    value={ input }
                    onChange={ ( e ) => setInput( e.target.value ) }
                />
                <button
                    disabled={ input && input.trim() !== '' ? false : true }
                    onClick={ () => generateQrCode() }>Generate</button>
            </div>
            <QRCode
                id='qr-code-value'
                value={ qrCode }
                size={ 400 }
                bgColor='#f6f6f6' />
        </div>
    )
}

export default QrCodeGenerator