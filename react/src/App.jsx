import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import './styles/Main.css';
import Header from './components/Header';
import Sideber from './components/Sideber';
import Footer from './components/Footer';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/posts");
        setPosts(res.data);
      } catch (err) {
        console.error("取得エラー:", err);
      }
    };
    fetchPosts();
  }, []);

  // フィルタ済みの投稿
  const filteredPosts = posts.filter((post) => {
    if (!searchTerm.trim()) return true; // 空欄なら全部表示
    return post.content.includes(searchTerm);
  });

  return (
    <>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="container">
        <Sideber />
        <main>
          {filteredPosts.map((post) => (
            <div key={post.id} className="post-item">
              <div className="post-header">
                <h4>名無しの匿名さん</h4>
                <small>{new Date(post.created_date).toLocaleString()}</small>
              </div>
              <p>{post.content}</p>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
