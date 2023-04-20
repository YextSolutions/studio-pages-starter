export interface GridContainerProps {
  children: React.ReactNode;
}

export default function GridContainer({ children }: GridContainerProps) {
  return (
    <div className="mx-auto py-10 grid max-w-7xl grid-cols-2 gap-x-8 px-8">
      {children}
    </div>
  );
}
