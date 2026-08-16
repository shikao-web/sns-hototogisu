// Footer.jsx
import React, { useState } from "react";
import axios from "axios";
import "../styles/Footer.css";
import postIcon from "../assets/post.png";

function Footer() {
    const [text, setText] = useState("");

    const handleSubmit = async (e) =>  {
        e.preventDefault();  // 修正
        try {
            const res = await axios.post("/api/posts", {
                content: text
            });
            console.log("送信成功:", res.data);
            setText(""); // 送信後に入力をクリア
            window.location.reload();
        } catch (error) {
            console.error("送信エラー:", error);
        }
    };

    return (
        <footer>
            <form className="post-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="query"
                    placeholder="投稿内容"
                    className="post-input"
                    autoComplete="off"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" className="post-button">
                    <img src={postIcon} alt="投稿" />
                </button>
            </form>
        </footer>
    );
}

export default Footer;
