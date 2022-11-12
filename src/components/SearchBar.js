import React, { useState } from 'react';


const SearchBar = ({onTermChange}) => {
    const [term, setTerm] = useState('');
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        onTermChange(term);
    }

    return( 
        <div className='ui search-bar segment container'>
            <form onSubmit={onFormSubmit} className='ui form'>
                <label>Video Search</label>
                <div className='field'>
                    <input onChange={(e) => setTerm(e.target.value)} value={term}/>
                </div>
            </form>
        </div>
    )

};

export default SearchBar;