import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ProfileCard({ pet }) {
  let navigate = useNavigate();

  return (
    <div className="profile-card" >
      <img src={ pet.photo } alt={ pet.name } className="pet-image" />
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
