import styles from '../../styles/Ninja.module.css'
import Link from 'next/link';


export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};

const ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>Ninjas Welcome</h1>
      {ninjas.map((ninja) => (
        <Link key={ninja.id} href={"/ninjas/"+ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ninjas;
