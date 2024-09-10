import viteLogo from "/vite.svg";
function Card() {
  return (
    <div className="card">
      <img className = "card-img" src={viteLogo} alt="profile pic" />
      <h2 className="card_title">Aniket Ghosh</h2>
      <p className="card_text">I am a btech IT student</p>
    </div>
  );
}

export default Card;
