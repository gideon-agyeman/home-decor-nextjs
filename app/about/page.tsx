import React from 'react';

const AboutPage = () => {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 justify-center items-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        We love
        <span className=" py-2 rounded-lg tracking-wide text-primary italic">
          Home Decor
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil fugit ex
        doloribus tenetur consequatur harum facere molestias totam, quibusdam
        quisquam. Aspernatur quidem minus eveniet amet?
      </p>
    </section>
  );
};

export default AboutPage;
