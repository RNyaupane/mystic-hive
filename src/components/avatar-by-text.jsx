import classes from "./avatar-by-text.module.css";

const AvatarByText = ({ firstName = "", lastName = "" }) => {
  // Get the first letter of firstName and last letter of lastName
  const avatarText = `${firstName.charAt(0).toUpperCase()}${lastName
    .charAt(0)
    .toUpperCase()}`;

  return (
    <button
      className={classes.avatar_button}
      id="UserAvatarText"
      type="button"
      aria-label={`${lastName}, ${firstName}`}
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span className={classes.avatar_text}>{avatarText}</span>
    </button>
  );
};

export default AvatarByText;
