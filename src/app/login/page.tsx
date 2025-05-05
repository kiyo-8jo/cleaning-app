import { signInWithGoogle } from "./actions";

const LoginPage = () => {
  return (
    <div className="bg-amber-50 flex items-center justify-center w-full h-[95vh]">
      <form className="bg-gray-300 flex flex-col items-center justify-center w-[300px] h-[200px] gap-10 rounded-2xl">
        <p className="text-lg">Googleアカウントでログインする</p>
        <button
          className="bg-blue-600 px-5 py-2 rounded-3xl text-white text-lg"
          formAction={signInWithGoogle}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
