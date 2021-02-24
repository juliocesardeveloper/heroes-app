import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';
import { heroes } from '../../data/heroes';

export const SearchScreen = ({ history }) => {

  const location = useLocation();
  const { q = '' } = queryString.parse( location.search );

  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  });
  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);

  const allHeroes = heroes;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${ searchText }`)
  }

  return (
    <div>
      <h1>Search Screen</h1>
      <hr/>

      <div className="column">
        <div>
          <form className="row mt-5 justify-content-center" onSubmit={ handleSearch }>
            <input
              type="text"
              placeholder="Find your hero"
              className="col-7 form-control mr-3"
              name="searchText"
              value={ searchText }
              onChange={ handleInputChange }
            />

            <button
              type="submit"
              className="btn btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div>
          <h4 className="mt-5">Results</h4>
          <hr/>
          <div className="card-columns">
            {
              q
                ?
                  heroesFiltered.map( hero => (
                      <HeroCard
                        key={ hero.id }
                        { ...hero }
                      />
                  ) )
                :
                  allHeroes.map( hero => (
                    <HeroCard
                      key={ hero.id }
                      { ...hero }
                    />
                  ) )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
