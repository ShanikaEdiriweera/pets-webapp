import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Results from "../../components/Results";

// actions
import { fetchPets } from "../../state/pet/actions";

function Directory() {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.data);

  useEffect(() => {
    if (pets.length === 0) {
      dispatch(fetchPets());
    }
  }, [dispatch, pets.length]);

  return (
    <div className="row">
      <div className="content-less"></div>
      <div className="content">
        <h1>Pets</h1>

        {pets.length > 0 ? <Results pets={pets} limit={1000} isOnlyAvailable={ true } /> : null}

      </div>
      <div className="content-less"></div>
    </div>
  );
}

export default Directory;
