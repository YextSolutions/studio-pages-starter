export interface HStackProps {
  children: React.ReactNode;
}

const HStack = ({ children }: HStackProps) => {
  return <div className="flex items-center">{children}</div>;
};

export default HStack;
