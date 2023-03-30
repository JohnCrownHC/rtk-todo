import { FC, ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold">Todo app</h1>
      <div className="mt-6 flex w-full max-w-md flex-col items-center space-y-4">
        {children}
      </div>
    </main>
  );
};
