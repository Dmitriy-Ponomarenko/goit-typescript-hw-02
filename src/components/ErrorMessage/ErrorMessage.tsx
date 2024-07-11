import css from "./ErrorMessage.module.css"; 

const ErrorMessage = ({ error }: { error: any }) => { 
  return <div className={css.error}>{error.message}</div>; 
}; 
export default ErrorMessage;
