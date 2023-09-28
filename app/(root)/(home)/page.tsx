import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="h1-bold">Home</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
};

export default Home;
