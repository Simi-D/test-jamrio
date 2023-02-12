import "./home.css";
import Header from "../../components/header/header";
import Posts from "../../components/posts/Posts";
export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
      </div>
    </>
  );
}
