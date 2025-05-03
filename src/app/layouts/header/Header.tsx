const Header = () => {
  return (
    <div className="h-15 bg-red-100 flex items-center">
      <div className="flex flex-1/3 justify-center font-bold">5/3</div>
      <div className="flex flex-1/3 justify-center font-bold text-xl gap-5 ">
        <div>フロント用画面</div>
        {/* <div>ハウス用画面</div>
        <div>作成用画面</div> */}
      </div>
      <div className="flex flex-1/3 justify-center font-bold gap-10">
        {/* <div>ホームへ</div> */}
        <div>サインイン</div>
        {/* <div>サインアウト</div> */}
      </div>
    </div>
  );
};

export default Header;
