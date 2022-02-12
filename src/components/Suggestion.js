import React, { useEffect } from 'react';
import SuggestionList from './SuggestionList';

const api = {
    base: 'https://api.geoapify.com/v1/geocode/autocomplete',
    // key: ''
}

const Suggestion = ({ query, setData, data, setSelectedPlace }) => {

    useEffect(() => {
        fetch(`${api.base}?text=${query}&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result.features)
            })
            .catch(error => console.log(error))
    }, [query, setData])

    return (
        <SuggestionList data={data} query={query} setSelectedPlace={setSelectedPlace} />
    )
}

export default Suggestion;