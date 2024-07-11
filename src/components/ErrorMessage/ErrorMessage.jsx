import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return <div className={css.error}>{error.message}</div>;
};

export default ErrorMessage;
