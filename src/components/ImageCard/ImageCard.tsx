import { BsInstagram } from "react-icons/bs";
import css from "./ImageCard.module.css";

const ImageCard = ({
  data: { urls, alt_description, description, user },
  openModal,
}) => {
  const handleClick = () => {
    openModal({ urls, description, alt_description });
  };
  return (
    <div className={css.card}>
      <img src={urls.small} alt={alt_description} onClick={handleClick} />
      {description ? (
        <p className={css.description}>{description}</p>
      ) : (
        <p className={css.description}>No description</p>
      )}
      {user.instagram_username && (
        <div className={css.instagram}>
          <a
            href={`https://instagram.com/${user.instagram_username}`}
            target="_blank"
            rel="noreferrer noopener"
            className={css.link}
          >
            <BsInstagram />

            {user.instagram_username}
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
