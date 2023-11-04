import React from "react";
import styles from "./style.module.scss";
import Socials from "../../../../socials.json";
import { Icon } from "@iconify/react";

const Error = () => {
  return (
    <>
      <div className={styles.error}>
        <h1>START</h1>
        <p>Public Template for Nextjs</p>
        {/* <Filteroptions /> */}
        <div className={styles.socials}>
          {Socials.map((ele) => {
            return (
              <a href={ele.link} target="_blank" title={ele.name}>
                <Icon icon={`cib:${ele.name}`} color="#579" />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Error;
