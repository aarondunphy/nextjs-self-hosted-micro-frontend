import "@/styles/globals.css";
import { GetServerSideProps } from "next";
import type { AppProps } from "next/app";

type MyAppProps = {
  test: string;
};
export default function App({
  Component,
  pageProps,
  test,
}: AppProps & MyAppProps) {
  return (
    <>
      <h1>Hello from another Micro Frontend 👋 </h1>
      Test string: {test}
      <Component {...pageProps} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("HELLO FROM _APP");
  return {
    props: {
      test: "Hello",
    },
  };
};
