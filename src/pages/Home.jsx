import React from "react";
import Header from "../components/Header";
import AlbumsList from "../components/AbumsList";
import FloatingLogs from "../components/FloatingLogs";

function Home() {
  return (
    <div>
      <Header />
      <AlbumsList />
      <FloatingLogs />
    </div>
  );
}

export default Home;
