const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt={`${name} profile`} width="48" />
      <p>
        <strong>{name}</strong>
      </p>
      <p style={isOnline ? { color: "green" } : { color: "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
