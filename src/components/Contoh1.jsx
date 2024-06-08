import { Suspense, useState } from "react";
import SearchResult from "../SearchResult";

const Contoh1 = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <label>
        Cari Album :
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Memuat ...</h2>}>
        <SearchResult query={query} />
      </Suspense>
    </>
  );
};

export default Contoh1;
