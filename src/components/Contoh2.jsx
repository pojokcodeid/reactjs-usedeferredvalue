import { Suspense, useDeferredValue, useState } from "react";
import SearchResult from "../SearchResult";

const Contoh2 = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;
  return (
    <>
      <label>
        Cari Album :
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Memuat ...</h2>}>
        <div
          style={{
            opacity: isStale ? 0.5 : 1,
            transition: isStale
              ? "opacity 0.2s 0.2s linear"
              : "opacity 0s 0s linear",
          }}
        >
          <SearchResult query={deferredQuery} />
        </div>
      </Suspense>
    </>
  );
};

export default Contoh2;
