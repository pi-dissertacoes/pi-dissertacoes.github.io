import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/easy-to-use.svg").default,
    description: (
      <>
        Dissertações is designed to be easy to use and easy to learn. With a modern and
        intuitive interface, Dissertações is perfect for you to choose/publish your
        dissertation theme without a legacy interface.
      </>
    ),
  },
  {
    title: "Process made simple",
    Svg: require("@site/static/img/agreement.svg").default,
    description: (
      <>
        Dissertações lets you focus on the only thing that matters: your choice. You can
        sit back and relax while we take care of the complicated stuff, like the
        publishing and agreement process.
      </>
    ),
  },
  {
    title: "Always up to date",
    Svg: require("@site/static/img/notifications.svg").default,
    description: (
      <>
        Don't miss anything! From new dissertation themes to your precious
        notifications, Dissertações will keep you updated with the latest updates, while
        updating you about your notifications.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
