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
        role="img"
      >
      </div>
      <h4>{ pet.name }</h4>
      <Button
        text="View"
        isIcon={ false }
        isPrimary={ true }
        onClick={ () => navigate("/profile") } 
        label={ `View ${ pet.name }'s profile`}
      />
      <Button
        icon="/icons/arrow-right.svg"
        isIcon={ true }
        isMobile={ true }
        isPrimary={ true }
        onClick={ () => navigate("/profile") } 
        label={ `View ${ pet.name }'s profile`}
      />
    </div>
  );
}

function resolveBatches (promises) {
  let arr;
  let fn;
  promises.forEach (p => {
    p.then(v => {
      arr.push(v);
      arr.length === 10 && fn(arr);
    });
  });
  return new Promise(r => fn = r)
}

export default ProfileCard;
