import { useRouter } from "next/router";

export default function Page(props: any) {
  console.log("CATCH ALL?????????");
  return (
    <>
      <h1>Catch all:</h1>
      {JSON.stringify(props)}
    </>
  );
}
