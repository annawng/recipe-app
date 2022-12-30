import { useState, useEffect } from 'react';

function Results({ query }) {
  const BASE_URL = 'https://api.edamam.com';
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  const [results, setResults] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const results = localStorage.getItem(query);
        if (results) {
          setResults(JSON.parse(results));
        } else {
          const response = await fetch(
            `${BASE_URL}/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
          );
          const data = await response.json();
          localStorage.setItem(query, JSON.stringify(data));
          setResults(data);
        }
      } catch (e) {
        console.error(e);
      }
    };

    load();
  }, [BASE_URL, APP_ID, APP_KEY, query]);

  return (
    results &&
    results.hits.length > 0 && (
      <div>
        {results.hits.map((result, index) => {
          return <h1 key={index}>{result.recipe.label}</h1>;
        })}
      </div>
    )
  );
}

export default Results;
