import { useCustomHook } from "./context";

const Search = () => {
  const { query, searchPost } = useCustomHook();
  return (
    <>
      <h1>TECH NEWS BOOST</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form">
          <input
            type="text"
            value={query}
            placeholder="search here.."
            onChange={(e) => searchPost(e.target.value)}
            className="input"
          />
        </div>
      </form>
    </>
  );
};

export default Search;
