import MyBio from "./Bio";
import Image from "./Image";
import YourName from "./Name";

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-[#F2EAD3] p-5 pb-7 w-[25%] rounded-2xl shadow-2xl">
      <Image user={user} />
      <YourName user={user} />
      <MyBio user={user} />
    </div>
  );
};

export default ProfileCard;
