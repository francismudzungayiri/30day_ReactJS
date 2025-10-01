import ProfileCard from "./components/ProfileCard";

let user = {
  name: "Francis Mudzungayiri",
  bio: "As the founder of TechCatalyzer, I lead a web development agency focused on creating high-performing, scalable e-commerce websites for African brands and global businesses.",
  imageUrl: "/IMG_2111.jpg",
};

const App = () => {
  return (
    <div class="bg-[#F9F5F0] flex items-center justify-center w-screen min-h-screen overflow-hidden">
      <ProfileCard user={user} />
    </div>
  );
};

export default App;
