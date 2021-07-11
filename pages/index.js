import Head from "next/head";
import DocumentsList from "../components/DocumentsList";
import Header from "../components/Header";
import NewDoc from "../components/NewDoc";
import { useSession, getSession } from "next-auth/client";
import Login from "../components/Login";

export default function Home() {
  const [session] = useSession()
  
  if(!session) return <Login />
  
  return (
    <div>
      <Header  />
      <NewDoc />
      <DocumentsList />
    </div>
  );
}

export async function getServerSideProps(context){
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}