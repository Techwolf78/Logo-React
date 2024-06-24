function Slider({ value, onChange }) {
  return (
    <div className="w-full">
      <input
        type="range"
        min="0"
        max="4"
        value={value}
        onChange={onChange}
        className="w-[90%] flex items-center justify-center mx-auto"
      />
      <div className="flex justify-between text-sm mt-2">
        <span>Strongly Disagree</span>
        <span>Disagree</span>
        <span>Neutral</span>
        <span>Agree</span>
        <span>Strongly Agree</span>
      </div>
    </div>
  );
}

export default Slider;
