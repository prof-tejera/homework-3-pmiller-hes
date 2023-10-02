import "./Form.css";

const FormHeader = ({ className, text }) => {
  return <div className={'default-heading ' + className} >{text}</div>;
};

export default FormHeader;
