import { useState } from "react";
import { authenticate } from "./auth/authService";

type Props = {
  onLogin: () => void;
};

const Login = ({ onLogin }: Props) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const isAuthenticated = authenticate(userId, password);
    if (isAuthenticated) {
        onLogin();
    } else {
        alert("IDまたはパスワードが違います");
    }
  };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // リロード防止
        handleLogin();      // 既存のログイン処理を呼ぶ
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8"
            >
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    ログイン
                </h1>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        ユーザーID
                    </label>
                    <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        パスワード
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                    ログイン
                </button>
            </form>
        </div>
    );
};

export default Login;
