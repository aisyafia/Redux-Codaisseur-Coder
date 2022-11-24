import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById } from "../store/feed/thunks";
import { useParams } from "react-router-dom";
import { selectOnePost } from "../store/feed/selectors";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const onePost = useSelector(selectOnePost);
  //   console.log(onePost, "2nd selector works");

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [id]);
  //   console.log("2nd useE works", useEffect);

  return (
    <div>
      <h2>Selected single post:</h2>
      <p>{onePost && onePost.title}</p>
    </div>
  );
};

export default DetailsPage;
