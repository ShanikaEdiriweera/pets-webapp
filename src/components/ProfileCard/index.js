import { useNavigate } from "react-router-dom";
import Button from "../Button";
import './profileCard.css';

function ProfileCard({ pet }) {
  let navigate = useNavigate();

  return (
    <div className="profile-card" >
      <div
        className="pet-image"
        style={{backgroundImage: `url(${pet.photo})`}}
        onClick={ () => navigate("/profile") }
        role="image"
      >
      </div>
      <h4>{ pet.name }</h4>
      <Button
        text="View"
        isIcon={ false }
        isPrimary={ true }
        onClick={ () => navigate("/profile") } 
      />
      <Button
        icon="/icons/arrow-right.svg"
        isIcon={ true }
        isPrimary={ true }
        onClick={ () => navigate("/profile") } 
        isMobile={ true }
      />
    </div>
  );
}

export default ProfileCard;
