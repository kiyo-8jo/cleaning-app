const SideBar = () => {
  return (
    <div className="bg-gray-300 w-[450px] h-full mr-5 p-3 rounded-2xl min-w-[300px] sticky top-9">
      <h2 className="my-5 text-center font-bold text-2xl">[部屋番号]の編集</h2>
      <form>
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center mb-3">
            <label htmlFor="cleaning_type" className="w-1/2">
              清掃方法
            </label>
            <select
              name="cleaning_type"
              id="cleaning_type"
              defaultValue="out"
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="out">OUT</option>
              <option value="in">IN</option>
              <option value="out-in">OUT-IN</option>
              <option value="stay">STAY</option>
              <option value="none">NONE</option>
            </select>
          </div>
          <div className="w-full flex items-center mb-3">
            <label htmlFor="cleaning_type" className="w-1/2 text-s">
              連泊清掃方法
            </label>
            <select
              name="stay_cleaning_type"
              id="stay_cleaning_type"
              defaultValue="not_select"
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="normal">NORMAL</option>
              <option value="eco">ECO</option>
              <option value="not_select">NOT-SELECT</option>
            </select>
          </div>
          <div className="w-full flex items-center mb-3">
            <label htmlFor="is_key_back" className="w-1/2">
              鍵の返却
            </label>
            <select
              name="is_key_back"
              id="is_key_back"
              defaultValue="0"
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="0">FALSE</option>
              <option value="1">TRUE</option>
            </select>
          </div>
          <div className="w-full flex items-center mb-3">
            <label htmlFor="now_beds" className="w-1/2">
              現在のベッド数
            </label>
            <select
              name="now_beds"
              id="now_beds"
              defaultValue="2"
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="w-full flex items-center mb-3">
            <label htmlFor="new_beds" className="w-1/2">
              変更後のベッド数
            </label>
            <select
              name="new_beds"
              id="new_beds"
              defaultValue="2"
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="w-full flex items-center mb-3">
            <label htmlFor="adult" className="w-1/2">
              大人
            </label>
            <select
              name="adult"
              id="adult"
              defaultValue="2"
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="w-full flex items-center mb-3">
            <label htmlFor="inf" className="w-1/2">
              添寝
            </label>
            <select
              name="inf"
              id="inf"
              defaultValue="0"
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="w-full flex items-center mb-3">
            <label htmlFor="kid_inf" className="w-1/2">
              子供添寝
            </label>
            <select
              name="kid_inf"
              id="kid_inf"
              defaultValue="0"
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="w-full flex items-center mb-3">
            <label htmlFor="is_cleaning_complete" className="w-1/2">
              清掃完了
            </label>
            <select
              name="is_cleaning_complete"
              id="is_cleaning_complete"
              defaultValue="0"
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="0">FALSE</option>
              <option value="1">TRUE</option>
            </select>
          </div>
          <div className="w-full flex items-center mb-3">
            <label htmlFor="memo" className="flex w-1/2 items-center">
              メモ
            </label>
            <textarea
              name="memo"
              id="memo"
              defaultValue=""
              className="w-1/2 bg-white font-sm resize-none h-[100px] rounded-md p-1"
            ></textarea>
          </div>
        </div>
        <div className="flex my-5 items-center justify-center gap-15">
          <div className="bg-yellow-100 w-[100px] py-1 rounded-2xl text-center font-semibold cursor-pointer">
            変更する
          </div>
          <div className="bg-yellow-100 w-[100px] py-1 rounded-2xl text-center font-semibold cursor-pointer">
            キャンセル
          </div>
        </div>
      </form>
    </div>
  );
};

export default SideBar;
