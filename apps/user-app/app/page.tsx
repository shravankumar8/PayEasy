"use client";
import { Appbar } from "@repo/ui/appbar";
import { useSession } from "next-auth/react";
// import { useBalance } from "@repo/store/useBalance";
// import { useBalance } from "@repo/store/useBalance";
export default function Home() {
  // const balance = useBalance();
  const session = useSession();
  return (
    <div>
      <div>
        <Appbar signedIn={true} />
      </div>

      {/* <div>{JSON.stringify(session.data?.user)}</div> */}
      {/* <div>{balance}</div> */}
    </div>
  );
}
