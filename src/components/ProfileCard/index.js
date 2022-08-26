import { useNavigate } from "react-router-dom";
import Button from "../Button";
import './profileCard.css';

function ProfileCard({ pet }) {
  let navigate = useNavigate();

  return (
    <div className="profile-card" >
      <img
        src={ pet.photo }
        alt={ pet.name }
        className="pet-image"
        onClick={ () => navigate("/profile") }
      />
      <h4>{ pet.name }</h4>
      <Button
        text="View"
        isIcon={ false }
        isPrimary={ true }
        onClick={ () => navigate("/profile") } 
      />
    </div>
  );
}

export default ProfileCard;
