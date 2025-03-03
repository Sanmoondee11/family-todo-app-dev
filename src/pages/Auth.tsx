// src/components/Auth.tsx
import React, { useState } from "react";
import { signIn, signUp } from "../services/Auth";

const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  // const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAuth = async () => {
    setErrorMessage("");
    try {
      if (isLogin) {
        const {  error } = await signIn(email, password);
        if (error) {
          setErrorMessage("ログインエラー: " + error.message);
        } else {
          alert("ログイン成功");
          // ログイン後のリダイレクト処理などを追加
        }
      } else {
        const {  error } = await signUp(email, password);
        if (error) {
          setErrorMessage("サインアップエラー: " + error.message);
        } else {
          alert("サインアップ成功！確認メールをチェックしてください");
          // サインアップ後の処理を追加
        }
      }
    } catch (error) {
      setErrorMessage("予期しないエラーが発生しました");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl">{isLogin ? "ログイン" : "サインアップ"}</h1>
      {/* emailの入力フォーム */}
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          className="gro text-lg"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {/* ユーザー名入力欄 */}
      <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
        <input
          className="grow text-lg"
          type="text"
          placeholder="username"
          // value={username}
          // onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      {/* パスワード入力欄 */}
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          className="grow text-lg"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button className="btn btn-primary my-8 mx-2" onClick={handleAuth}>
        {isLogin ? "ログイン" : "サインアップ"}
      </button>
      <button
        className="p-2 text-blue-500 underline"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "新規登録はこちら" : "ログインはこちら"}
      </button>
    </div>
  );
};

export default Auth;
