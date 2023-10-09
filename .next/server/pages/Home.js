import client from '/client.js';

const Home = ({data}) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export async function getStaticProps() {
  const query = `*[_type == "homePage"][0] {
    title,
    description
  }`;

  const data = await client.fetch(query);

  return {
    props: {
      data,
    },
  };
}

export default Home;
