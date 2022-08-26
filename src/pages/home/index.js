import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components

// actions
import { fetchPets } from '../../state/pet/actions';

function Home() {
  const dispatch = useDispatch();
  const pets = useSelector(state => state.pets.data);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <div className="row">
      <div className="content-less"></div>
      <div className="content">
        <h1>Pets</h1>
        {/* Search Component */}
        {/* Results Component */}
        <h3>Results</h3>
        {
          pets.map(pet => {
            return <p key={ pet.id } >{ pet.name }</p>            
          })
        }
      </div>
      <div className="content-less"></div>
    </div>
  );
}

export default Home;
