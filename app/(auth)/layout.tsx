const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className='h-full w-full flex items-center justify-center'>
        {children}
      </body>
    </html>
  );
};

export default AuthLayout;
