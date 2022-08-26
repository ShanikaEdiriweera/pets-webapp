// components
import ProfileCard from "../../components/ProfileCard";

function Results({ pets }) {
  const results = pets.length > 3 ? pets.slice(0, 3) : pets;
  return (
    <div className="row">
      <h3>Results</h3>
      {
        results.map(pet => {
          return <ProfileCard pet={ pet } key={ pet.id } />            
        })
      }
    </div>
  );
}

export default Results;
