import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components
import Results from './Results';

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

        {
          pets.length > 0 ? <Results pets={ pets } /> : null
        }

        {/* Pets Directory Component */}
        {/* Categories Component */}

      </div>
      <div className="content-less"></div>
    </div>
  );
}

export default Home;
