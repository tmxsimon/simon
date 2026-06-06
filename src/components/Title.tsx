const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-xl mb-base-sm">
      {children}
      <hr className="border-gray-neutral-300" />
    </div>
  );
};

export default Title;
