import PropTypes from "prop-types";
import { fetchData } from "./Data";
export default function SearchResult({ query }) {
  if (query === "") {
    return null;
  }
  const albums = use(fetchData(`/search?q=${query}`));
  if (albums.length === 0) {
    return (
      <p>
        No matches for <i>{query}</i>
      </p>
    );
  }
  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}

SearchResult.propTypes = {
  query: PropTypes.string,
};

function use(promise) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
      },
    );
    throw promise;
  }
}
