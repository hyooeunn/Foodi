"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "../components/Input";
import { EyeClosed, Eye, User, LockKeyhole } from "lucide-react";

export default function Login() {
  const router = useRouter();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFrom = () => {
    // 아이디와 비밀번호 공백 체크
    if (id.trim() === "" || password.trim() === "") {
      setError("아이디와 비밀번호를 입력해주세요.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleLogin = (E: React.FormEvent) => {
    E.preventDefault();

    // 폼 유효성 검사
    if (!validateFrom()) return;

    console.log("로그인 시도: ", { id, password });

    router.push("/main");
  };

  return (
    <div className="text-black flex justify-center items-center">
      <div
        onSubmit={handleLogin}
        className="flex w-full max-w-md flex-col gap-8 rounded-4xl bg-white p-10 shadow-lg"
      >
        {/* 로고 넣을 곳 */}
        <h2 className="text-black">Foodi</h2>
        <div>
          <label className="ml-2 text-sm font-semibold">아이디</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input
              type={id}
              placeholder={"아이디"}
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="ml-2 text-sm font-semibold">비밀번호</label>
          <div className="relative">
            <LockKeyhole className="absolute left-3 top-1/2 transfrom -translate-y-1/2" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder={"비밀번호"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 transform -transfrom-y-1/2"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <Eye className="h-5 w-5 cursor-pointer" />
              ) : (
                <EyeClosed className="h-5 w-5 cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        {/* 에러 */}
        {error && <div className="text-red-500">{error}</div> }

        <button
          type="submit"
          className="cursor-pointer bg-[#C5DA69] text-[#fff] font-semibold h-11 rounded-2xl"
        >
          로그인
        </button>

        <div className="text-center">
          <p>
            계정이 없으신가요? {""}
            <Link
              href="/Signup"
              className="text-sm hover:underline text-[#C5DA69] font-bold"
            >
              회원가입
            </Link>
          </p>

          <Link
            href="/FindPw"
            className="text-sm text-[#C5DA69] font-semibold"
          >
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </div>
  );
}
