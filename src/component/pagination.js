import { useCustomHook } from "./context";
const Page = () => {
  const { page, nbpages, prevPage, nextPage } = useCustomHook();
  return (
    <>
      <div className="button">
        <button onClick={() => prevPage()} className="btn">
          Prev
        </button>
        <p className="p">
          {page} of {nbpages}
        </p>
        <button onClick={() => nextPage()} className="btn2">
          Next
        </button>
      </div>
    </>
  );
};
export default Page;
