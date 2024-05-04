import s from './SearchBox.module.css'

const SearchBox = ({ setSearchContact }) => {
  return (
    <div className={s.search}>
      <label htmlFor="searchID" className={s.label}>Find contacts by name</label>
      <input
      className={s.input}
        type="search"
        name="search"
        id="searchID"
        placeholder="Find..."
        onChange={(e) => setSearchContact(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
