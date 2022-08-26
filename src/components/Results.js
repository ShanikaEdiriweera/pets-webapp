// components
import ProfileCard from "./ProfileCard";

function Results({ pets, limit, isOnlyAvailable }) {
  const filteredPets = isOnlyAvailable ? pets.fliter(pet => pet.available === "Yes") : pets;
  const results = filteredPets.length > limit ? filteredPets.slice(0, limit) : filteredPets;
  return (
    <div>
      <h3>Results</h3>
      <div className="results" >
        {
          results.map(pet => {
            return <ProfileCard pet={ pet } key={ pet.id } />            
          })
        }
      </div>
    </div>
  );
}

export default Results;
