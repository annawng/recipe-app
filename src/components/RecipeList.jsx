import React from 'react';
import styled from 'styled-components';

const Recipes = styled.div`
  padding-block: 1rem;
  margin: auto;
  max-width: 80%;

  @media (min-width: 600px) {
    padding-block: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    justify-items: center;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1150px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

const RecipeCard = styled.article`
  display: flex;
  margin-block: 1rem;
  overflow: hidden;
  width: 100%;
  color: var(--on-surface);

  &:hover {
    cursor: pointer;

    h2 {
      text-decoration: underline;
    }
  }

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
    -webkit-line-clamp: 2;
  }

  p {
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    color: var(--on-surface-light);
  }

  .text {
    padding-left: 1rem;
  }

  @media (min-width: 480px) {
    h2 {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 600px) {
    display: block;
    margin-block: 0;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: var(--1dp-shadow);

    img {
      max-width: 100%;
      height: 125px;
      object-fit: cover;
    }

    .text {
      padding: 1rem;
    }

    @media (min-width: 768px) {
      img {
        height: 150px;
      }
    }

    @media (min-width: 1150px) {
      img {
        height: 200px;
      }
    }
  }
`;

function RecipeList({ recipes }) {
  const getRecipeId = (uri) => uri.split('#recipe_').pop();

  const viewRecipe = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Recipes>
      {recipes.map((recipe) => {
        const image = recipe.images.REGULAR;
        const id = getRecipeId(recipe.uri);
        const url = recipe.url;
        return (
          <RecipeCard key={id} onClick={() => viewRecipe(url)}>
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
