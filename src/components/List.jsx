import { useEffect, useState } from "react";

function List() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    console.log("hi");

    async function fetchdata() {
      console.log("inside");
      // let response = await fetch(
      //   "https://www.omdbapi.com/?i=tt3896198&apikey=fa3dab28"
      // );
      let response = await fetch("../selfdata.json");
      console.log("inside2", response);
      const data = await response.json();
      console.log("inside23");
      console.log("data", data);
    }
    console.log("whatsapp");
    fetchdata();
  });
  return <div>List</div>;
}

export default List;
