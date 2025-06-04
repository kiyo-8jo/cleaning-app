import { signInWithGoogle } from "./actions";

const LoginPage = () => {
  return (
    <div className="flex h-[95vh] w-full items-center justify-center bg-amber-50">
      <form className="flex h-[200px] w-[300px] flex-col items-center justify-center gap-10 rounded-2xl bg-gray-300">
        <p className="text-lg">Googleアカウントでログインする</p>
        <button
          className="cursor-pointer rounded-3xl bg-blue-600 px-5 py-2 text-lg text-white"
          formAction={signInWithGoogle}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
