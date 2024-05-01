function Button({ num, onBtnClick }) {
  return (
    <>
      <button type="button" className="buttonClass" onClick={onBtnClick}>
        {num}
      </button>
    </>
  );
}
export default Button;
