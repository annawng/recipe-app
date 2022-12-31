import React from 'react';
import styled from 'styled-components';

const Recipes = styled.div`
  padding-block: 1rem;
  margin: auto;
  max-width: 90%;

  @media (min-width: 601px) {
    padding-block: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    justify-items: center;
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
  }
`;

const RecipeCard = styled.article`
  display: flex;
  height: 7em;
  margin-block: 1rem;
  overflow: hidden;

  img {
    height: 100%;
    max-width: 30%;
    object-fit: cover;
  }

  h2 {
    font-size: 1.02rem;
    font-weight: 400;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  p {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
  }

  .text {
    padding-left: 1rem;
  }

  @media (min-width: 481px) {
    h2 {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 601px) {
    display: block;
    margin-block: 0;
    height: auto;
    overflow: hidden;

    img {
      max-width: 100%;
      height: 66%;
      object-fit: cover;
    }

    .text {
      padding: 1rem 0;
    }

    h2 {
      max-width: 300px;
    }
  }

  @media (min-width: 769px) {
    height: 22rem;
  }
`;

function RecipeList({ recipes }) {
  // on click, go to recipe page, pass recipe id

  console.log(recipes);

  const getRecipeId = (uri) => uri.split('#recipe_').pop();

  return (
    <Recipes>
      {recipes.map((recipe, index) => {
        const image = recipe.images.REGULAR;
        const id = getRecipeId(recipe.uri);
        return (
          <RecipeCard key={id}>
            <img
              src={image.url}
              alt=''
              width={image.width}
              height={image.height}
            />

            <div className='text'>
              <p>{recipe.source}</p>
              <h2>{recipe.label}</h2>
            </div>
          </RecipeCard>
        );
      })}
    </Recipes>
  );
}

export default RecipeList;
