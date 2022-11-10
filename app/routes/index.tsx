import * as React from "react";

import { useNavigate } from "@remix-run/react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "~/firebase.config";
import { firebaseAnonymousSignIn, logOut } from "~/service/auth";

export const loader = async () => {
  await firebaseAnonymousSignIn();
  return {};
};

export default function Index() {
  const navigate = useNavigate();

  const goToList = () => {
    navigate("todo-list");
  };

  const goToForm = () => {
    navigate("todo-form");
  };

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("[LOGGED IN] CURRENT USER : ", user.uid);
      } else {
        const user = await firebaseAnonymousSignIn();
        console.log("NEW USER : ", user?.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-1 justify-center flex-col mx-10 content-center">
      <h1 className="text-center mt-4 font-bold">TODO Firebase</h1>
      <button
        className="border-gray-500 border rounded-md p-2 mt-4"
        onClick={goToForm}
      >
        Go to Form
      </button>
      <button
        className="border-gray-500 border rounded-md p-2 mt-4"
        onClick={goToList}
      >
        Go to list
      </button>
      <button
        className="border-gray-500 border rounded-md p-2 mt-4"
        onClick={logOut}
      >
        logOut
      </button>
    </div>
  );
}
