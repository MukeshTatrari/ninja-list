import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    console.log("use effect run");
    setTimeout(() => {
        router.push("/")
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oops ....</h1>
      <h2>that page cannot be found ...</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
