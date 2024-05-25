import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
    <div className="flex w-full justify-center items-center">
        <UserProfile path="/user-profile" />
    </div>
);

export default UserProfilePage;