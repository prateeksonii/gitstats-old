import { User } from "@/types/user";
import Image from "next/image";

type UserPageProps = {
  params: {
    username: string;
  };
};

const fetchUser = async (username: string): Promise<User> => {
  return fetch(`https://api.github.com/users/${username}`).then(async (res) => {
    const data = await res.json();
    if (!data.id) throw new Error("Not found");
    return data as User;
  });
};

export default async function UserPage({ params }: UserPageProps) {
  const user = await fetchUser(params.username);

  return (
    <div className="mx-auto container p-8">
      <div className="flex items-center gap-4">
        <Image
          src={user.avatar_url}
          alt="user avatar"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <div className="text-zinc-400 md:text-lg">@{user.login}</div>
          <div className="text-zinc-100 font-bold text-3xl md:text-6xl">
            {user.name}
          </div>
        </div>
      </div>
      <ul className="py-8 text-lg md:text-2xl text-zinc-400 grid md:grid-cols-2 gap-4">
        <li className="flex items-center gap-2 md:gap-4">
          <span className="text-2xl md:text-4xl text-white">
            {user.public_repos}
          </span>{" "}
          public repositories
        </li>
        <li className="flex items-center gap-2 md:gap-4">
          <span className="text-2xl md:text-4xl text-white">
            {user.public_gists}
          </span>{" "}
          public gists
        </li>
        <li className="flex items-center gap-2 md:gap-4">
          <span className="text-2xl md:text-4xl text-white">
            {user.followers}
          </span>{" "}
          followers
        </li>
        <li className="flex items-center gap-2 md:gap-4">
          <span className="text-2xl md:text-4xl text-white">
            {user.following}
          </span>{" "}
          following
        </li>
      </ul>

      {JSON.stringify(user, null, 2)}
    </div>
  );
}
