import React, { useState, useEffect } from 'react'; 

function linearSearch(arr, target) { 
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] === target) { 
      return i; 
    } 
  } 
  return -1; 
} 

function Search() { 
  const [numbers] = useState([5, 7, 3, 1, 8]); 
  const [searchResult, setSearchResult] = useState(''); 
  useEffect(() => { 
    const index = linearSearch(numbers, 8); 
    if (index !== -1) { 
      setSearchResult(`Number 8 found at index: ${index}`); 
    } else { 
      setSearchResult('Number 8 not found.'); 
    } 
  }, [numbers]); 
  return ( 
    <div> 
      <h3>Numbers: {numbers.join(', ')}</h3> 
      <p>{searchResult}</p> 
    </div> 
  ); 
} 

export default Search;