import React from 'react';
import '../App.css';

const SuggestionList = ({data, query, setSelectedPlace}) => {

    return (
        <div className={(query !== '') ? "Suggestion" : "hidden-list"}>
            {data && data.map(element => (
                <div className="Suggestion-list"
                key={Math.random()*4}
                onClick={() => setSelectedPlace(element.properties.formatted)}
                >
                    {element.properties.formatted}
                </div>
            ))}
        </div>
    )
}

export default SuggestionList;