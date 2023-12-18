const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full lg:max-w-screen-xl flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16 px-5 lg:px-0">
      {children}
    </section>
  );
};

export default SectionContainer;
