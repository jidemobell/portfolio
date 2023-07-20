import Header from "../Header/Header";
import style from "./journal.module.css";
import React, { useEffect, useState } from "react";

export default function Journal({closeJournal}) {
  const [data, setData] = useState([]);

  async function getBlog() {
    const response = await fetch(
      "https://dev.to/api/articles?username=jidemobell"
    );
    const blogs = await response.json();
    console.log(blogs);
    setData(blogs);
  }

  useEffect(() => {
    getBlog();
  }, []);
  return (
    
    <>
      <Header fromJournal={true} passCloseAction={closeJournal} />
      <div className={style.journalcontainer}>
        <section className={style.sectcontainer}>
          {data.map((entry) => {
            return (
                <div className="hvr-sink  blogs" style={{background:"#181818",padding:"20px", marginTop: "20px"}}  key={entry.id}>
                <a href={entry.url} className={  style.link} key={entry.id}>
                  <div className={style.top}>
                    <div className={style.date}> {entry.created_at} </div>
                    <div className={style.time}> 12:08 PM </div>
                  </div>
                  <div className={style.bottom} >
                    <span>{entry.title}</span>
                  </div>
                </a>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
