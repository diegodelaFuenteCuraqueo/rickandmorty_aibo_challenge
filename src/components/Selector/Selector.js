
function Selector({ label, options, selected, onChange }) {
  return (
    <>
    <div>
      <label>{label}
        <select onChange={onChange} value={selected}>
          <option value="">All</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  </>
  )
}

export default Selector