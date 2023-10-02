import "./Form.css";

const FormLabel = ({ className, labelClassName, textClassName, label, text }) => {
  return <div className={'default-label-container '+ labelClassName}>
      <span className={'default-label '+ labelClassName}>{label}</span>
      <span className={'default-label-text '+ textClassName}>{text}</span>
    </div>;
};

export default FormLabel;
