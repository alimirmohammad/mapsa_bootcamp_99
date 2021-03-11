import { useParams, useHistory } from 'react-router-dom';

const Post = () => {
  const params = useParams();
  const history = useHistory();
  console.log(history);

  const goToAbout = () => {
    history.replace('/about');
  };

  return (
    <div>
      <div>This is post with id {params.id}</div>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
};

export default Post;
