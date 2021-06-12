import { useParams } from 'react-router-dom';

function ForcastPage() {
  const { lat, long } = useParams();
  return <h2>Got here</h2>;
}

export default ForcastPage;
