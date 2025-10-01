const Image = ({ user }) => {
  return (
    <>
      <img src={user.imageUrl} className="w-full h-80 rounded-2xl" />
    </>
  );
};

export default Image;
