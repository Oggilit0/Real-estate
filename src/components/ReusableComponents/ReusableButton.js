import '../../stylesheets/ReusableButton.css';

const ReusableButton = ({onClick, title,submit, color}) => {
  return <div>
    <button className = "reuse-btn" onClick={onClick} submit={submit} style={{backgroundColor: color}}>{title}</button>
    </div>
}

export default ReusableButton;