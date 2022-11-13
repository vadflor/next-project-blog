import Image from "next/image";

import classes from "./Hero.module.css";

const FeaturedPosts = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.webp"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, Im Max</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular and React.
      </p>
    </section>
  );
};

export default FeaturedPosts;
