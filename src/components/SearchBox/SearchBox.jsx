const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <label>
        <span>Find contacts</span>
        <input
          type="text"
          value={value}
          onChange={e => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
