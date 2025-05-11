const Success = () => {
  setTimeout(() => {
    window.location.reload();
  }, 1500);
  return (
    <div className="flex items-center justify-center h-[600px] font-semibold text-3xl">
      完了しました、元の画面に戻ります
    </div>
  );
};

export default Success;
