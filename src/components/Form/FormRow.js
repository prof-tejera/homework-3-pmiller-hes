import "./Form.css";

const FormRow = ({ className, children }) => {
  return <div className={'default-formRow '+ className}>{children}</div>;
};

export default FormRow;
