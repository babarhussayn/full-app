import Wrapper from "./wrappers/Wrapper";
import StoreProvider from "../StoreProvider";
import { Toaster } from "@/components/ui/toaster";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <Wrapper>{children}</Wrapper>
      <Toaster />
    </StoreProvider>
  );
}
