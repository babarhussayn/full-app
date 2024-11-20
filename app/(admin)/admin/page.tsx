"use client";
import { useSession } from "next-auth/react";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/auth/login");
    }
  }, [router, session]);

  return <div>Welcome to the Admin Dashboard{session?.user as string}</div>;
}
AdminPage.auth = true;
