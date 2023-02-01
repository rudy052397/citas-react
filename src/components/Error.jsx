const Error = ({ children }) => {
  return (
    <div className="bg-red-500 text-white text-center p-2 rounded-md mb-2 uppercase">
      {children}
    </div>
  );
}

export default Error;