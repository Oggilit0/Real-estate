const ReusableButton = ({onClick, title,submit}) => {
  return <div>
    <button className = "reuse-btn" onClick={onClick} submit={submit}>{title}</button>
    </div>
}

export default ReusableButton;