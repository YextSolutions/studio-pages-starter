export interface VStackProps {
  children: React.ReactNode;
}

const VStack = ({ children }: VStackProps) => {
  return <div className="lg:max-w-lg lg:self-end">{children}</div>;
};

export default VStack;
