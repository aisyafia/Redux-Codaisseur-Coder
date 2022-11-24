import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../store/feed/thunks";
import { selectPosts } from "../store/feed/selectors";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(selectPosts);

  //   console.log(allPosts, "selector works");

  useEffect(() => {
    dispatch(fetchAllPosts);
  }, []);
  //   console.log(useEffect, "useEffect works");

  return (
    <div>
      <h2>Codaisseur Coders</h2>
      <div>
        {allPosts &&
          allPosts.map((p) => {
            return (
              <div>
                <Link to={`/posts/${p.id}`}>
                  <p>{p.title}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
