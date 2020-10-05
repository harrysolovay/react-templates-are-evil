import React from "react";
import {useRouter} from "next/router";

export default function FourOFour(): React.ReactElement {
  const {asPath} = useRouter();

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>
        The route <code>{asPath}</code> does not exist.
      </p>
    </div>
  );
}
