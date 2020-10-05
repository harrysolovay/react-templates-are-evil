import {GetServerSideProps} from "next";
import React from "react";
import styleClassNames from "./index.module.scss";
import {useRouter} from "next/router";
import {v4} from "uuid";

interface Props {
  serverSideComputedProp?: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  ctx; // TODO: remove this (temporarily prevents TS error pertaining to unused local `ctx`)
  return {props: {serverSideComputedProp: await Promise.resolve(v4())}};
};

export default function Index(props: Props): React.ReactElement {
  const router = useRouter();

  return (
    <div className="px-2 py-1">
      <div className={`${styleClassNames.card} mt-1`}>
        <h2>A prop we computed on the server:</h2>
        <p>{props.serverSideComputedProp}</p>
      </div>
      <div className={`${styleClassNames.card} mt-1`}>
        <h2>The current page's path:</h2>
        <p>{router.pathname}</p>
      </div>
    </div>
  );
}
