import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import RecipeList from '../components/RecipeList';

function Results() {
  const BASE_URL = 'https://api.edamam.com';
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  const [results, setResults] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const load = async (query) => {
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

    load(searchParams.get('q'));
  }, [BASE_URL, APP_ID, APP_KEY, searchParams]);

  return (
    results &&
    results.hits.length > 0 && (
      <RecipeList recipes={results.hits.map((result) => result.recipe)} />
    )
  );
}

export default Results;
