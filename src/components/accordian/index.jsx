import { useState } from "react";
import data from './data'
import "./styles.css"

export default function Accordian () {
    const [ selected, setSelected ] = useState( null );
    const [ multiSelection, setMultiSelection ] = useState( false );
    const [ multiple, setMultiple ] = useState( [] );

    const handleSelection = ( getCurrentId ) => {
        if ( !multiSelection ) {
            setSelected( getCurrentId === selected ? null : getCurrentId );
        } else {
            const isExistedItem = multiple.indexOf( getCurrentId );

            isExistedItem !== -1 ?
                setMultiple( multiple.filter( item => item !== getCurrentId ) )
                :
                setMultiple( [ getCurrentId, ...multiple ] );
        }
    }

    return (
        <div className="wrapper">
            <button onClick={ () => setMultiSelection( !multiSelection ) }>Enable Multi selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map( dataItem => (
                            <div className="item" key={ dataItem.id }>
                                <div className="item-title" onClick={ () => handleSelection( dataItem.id ) }>
                                    <h3>{ dataItem.question }</h3>
                                    <span>+</span>
                                </div>
                                {
                                    // Basically if multiselection is true it shows all clicked answer else show only one clicked item
                                    multiSelection ?
                                        multiple.indexOf( dataItem.id ) !== -1 && <div className="content">
                                            { dataItem.answer }
                                        </div>
                                        :
                                        selected === dataItem.id ?
                                            <div className="content">
                                                { dataItem.answer }
                                            </div>
                                            : null

                                }
                            </div>
                        ) )
                        : <div>No data found</div>
                }
            </div>
        </div>
    );
}
