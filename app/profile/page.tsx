"use client";
import Button from "@/components/common/Button";
import { logoutUser } from "@/services/UserServices";
import useLoginStore from "@/store/LoginStore";
import useUserStore from "@/store/UserStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { user, setUser } = useUserStore();
  const router = useRouter();
  const { openLoginModal } = useLoginStore();

  // const fetchUserMutation = useMutation({
  //   mutationFn:
  // })

  const logoutUserMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      toast.success("Successfully logged out", { duration: 2000 });
      setUser(null);
      router.push("/");
    },
  });

  useEffect(() => {
    console.log("user = ", user);
    if (!user) {
      openLoginModal();
    }
  }, [user]);

  return (
    <div>
      <div className="mt-10">
        {/* <div className="mx-auto rounded-full size-[6rem] bg-gray-500 mb-6"></div> */}
        {user ? (
          <div className="mx-auto w-1/2 flex flex-col items-center gap-6">
            <div className="field-row">
              <div className="field">
                <p>Firstname</p>
                <p>{user.firstname}</p>
              </div>
              <div className="field">
                <p>Lastname</p>
                <p>{user.lastname}</p>
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <p>Email</p>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center gap-4">
            <p className="my-6 font-medium text-gray-700 ">User not logged in</p>

            <div className="flex items-center gap-4">
              <Button click={openLoginModal}>Login to Retrogoods</Button>
            </div>
          </div>
        )}
        <div className="w-full flex items-center justify-center mt-5">
          <Button click={logoutUserMutation.mutate}>Log out</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
