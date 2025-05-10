const CreatePage = () => {
  return (
    <main className="bg-orange-100 h-[95vh] flex flex-col justify-center items-center">
      <div className="flex gap-30">
        <div className="bg-green-600 flex flex-col justify-center w-[350px] p-5 rounded-2xl">
          <label className="flex justify-center mb-5 text-2xl font-medium">
            1Fのデータを選択
          </label>
          <input
            id="file_input"
            type="file"
            className="file:mr-4 file:rounded-full file:bg-gray-50 file:p-3 file:text-sm file:font-semibold cursor-pointer file:cursor-pointer"
          />
        </div>
        <div className="bg-green-600 flex flex-col justify-center w-[350px] p-5 rounded-2xl">
          <label className="flex justify-center mb-5 text-2xl font-medium">
            2Fのデータを選択
          </label>
          <input
            type="file"
            id="2f"
            className="file:mr-4 file:rounded-full file:bg-gray-50 file:p-3 file:text-sm file:font-semibold cursor-pointer file:cursor-pointer"
          />
        </div>
      </div>
    </main>
  );
};

export default CreatePage;
