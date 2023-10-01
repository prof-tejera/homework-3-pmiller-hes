import "./ErrorBar.css";


const ErrorBar = ({ isShown, message, ...props })  => {

    return <div className={isShown ? "default-errorBar-visible" : "default-errorBar-hidden"}>{message}</div>;
};

export default ErrorBar;
