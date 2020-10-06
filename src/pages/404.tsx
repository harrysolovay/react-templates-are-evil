import React from "react";
import styleClassNames from "./404.module.scss";
import {useRouter} from "next/router";

export default function FourOFour(): React.ReactElement {
  const {asPath} = useRouter();

  return (
    <div className={styleClassNames.container}>
      <h1>404 Not Found</h1>
      <p>
        The route <code>{asPath}</code> does not exist.
      </p>
    </div>
  );
}
