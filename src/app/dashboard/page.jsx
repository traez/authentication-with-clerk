import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const user = await currentUser();
  console.log("User Data", user);

  if (!user) {
    return (
      <div>
        <p>User is not logged in</p>
      </div>
    );
  }

  const {
    id,
    username,
    firstName,
    lastName,
    emailAddresses,
    externalAccounts,
    imageUrl,
    createdAt,
    lastSignInAt,
  } = user;

  return (
    <>
      <h2 className="text-2xl font-bold mb-5">Dashboard</h2>
      <p className="mb-5">Welcome to the dashboard!</p>
      <p>
        You're seeing this because you've successfully signed in and ready to
        go!
      </p>

      <div className=" mt-5">
      <b>User Profile</b>
      <img src={imageUrl} alt={`${firstName} ${lastName}`} />
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Name:</strong> {firstName} {lastName}</p>
      <p><strong>Email:</strong> {emailAddresses[0].emailAddress}</p>
      <p><strong>Created At:</strong> {new Date(createdAt).toLocaleString()}</p>
      <p><strong>Last Sign-In:</strong> {new Date(lastSignInAt).toLocaleString()}</p>
    </div>
    </>
  );
}
