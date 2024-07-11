import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick } : { onClick: any }) => {
  return (
    <button className={css.button} type="submit" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;