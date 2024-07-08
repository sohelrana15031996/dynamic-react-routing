import { useLoaderData } from "react-router-dom";


const About = () => {
  const album = useLoaderData()
  return (
    <div>
      <h1>About Us: {album.length}</h1>
      <p>Hi there! i am here to help</p>
    </div>
  );
};

export default About;