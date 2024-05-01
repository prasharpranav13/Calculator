function Display({ displayItem }) {
  return (
    <input
      className="display"
      placeholder=" AC"
      type="text"
      value={displayItem}
      readOnly
    />
  );
}
export default Display;
