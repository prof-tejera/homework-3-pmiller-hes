import "./Form.css";

const Form = ({ className, children }) => {
  return <div className={'default-form '+ className}>{children}</div>;
};

export default Form;
