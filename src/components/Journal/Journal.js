import Header from "../Header/Header";
import style from "./journal.module.css";
import React, { useEffect, useState, Fragment } from "react";
// import {  Link } from "react-router-dom";

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

  let styles  = `{
    background: #181818;
    padding: 20px;
    margin: 25px 10px;
    text-align: left;
    text-decoration: none;
  }`

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
              // <div key={entry.id} className="hvr-grow">
                <div className={style.blogs}  key={entry.id}>
                <a href={entry.url} className={style.link} key={entry.id}>
                  <div className={style.top}>
                    <div className={style.date}> {entry.created_at} </div>
                    <div className={style.time}> 12:08 PM </div>
                  </div>
                  <div className={style.bottom} >
                    <span>{entry.title}</span>
                  </div>
                </a>
              </div>
              // </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
