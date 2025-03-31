import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          className={css.profilePhoto}
          src={image}
          alt={`${name} profile`}
          width={175}
        />
        <p className={css.userName}>{name}</p>
        <p className={css.tagName}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span>Followers</span> <br />
          <span>
            <strong>{stats.followers}</strong>
          </span>
        </li>
        <li>
          <span>Views</span> <br />
          <span>
            <strong>{stats.views}</strong>
          </span>
        </li>
        <li>
          <span>Likes</span> <br />
          <span>
            <strong>{stats.likes}</strong>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
