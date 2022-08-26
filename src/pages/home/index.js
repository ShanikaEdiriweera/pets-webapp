import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// components
import Results from "../../components/Results";
import Categories from "./Categories";

// actions
import { fetchPets } from "../../state/pet/actions";
import Button from "../../components/Button";

import './home.css';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pets = useSelector((state) => state.pets.data);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <div className="row">
      <div className="content-less"></div>
      <div className="content">
        <h1>Pets</h1>
        {/* Search Component */}

        {pets.length > 0 ? <Results pets={pets} limit={3} isOnlyAvailable={ false } /> : null}

        {/* Pets Directory Component */}
        <div className="pets-directory">
          <div className="pets-directory-left">
            <img src="/images/treats.jpeg" alt="treats" className="pets-directory-image"/>
          </div>
          <div className="pets-directory-right">
            <h2>Pets Directory</h2>
            <p>See all pets available for adoption,</p>
            <p>promote them and get them a home.</p>
            <Button
              isIcon={ false }
              isPrimary={ false }
              text="See all"
              onClick={ () => navigate("/directory") } 
              styleOverride={{ width: "250px", marginTop: "25px", marginBottom: "25px" }}
            />
          </div>
        </div>

        <Categories />
      </div>
      <div className="content-less"></div>
    </div>
  );
}

export default Home;
