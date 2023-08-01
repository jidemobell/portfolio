import Header from "../Header/Header";
import style from "./journal.module.css";
import React, { useEffect, useState } from "react";

export default function Journal({ closeJournal }) {
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
              <div
                className="blogs"
                style={{
                  background: "#181818",
                  padding: "12px",
                  marginTop: "5px",
                  borderBlockColor: "red",
                }}
                key={entry.id}
              >
                <a
                  href={entry.url}
                  className={style.link}
                  key={entry.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ border: "1px gray solid", padding: "10px" }}>
                    <div className={style.top}>
                      <div className={style.date}>
                        {" "}
                        {entry.readable_publish_date}{" "}
                      </div>
                      <div className={style.time}>
                        {" "}
                        {new Date(entry.created_at).getFullYear()}{" "}
                      </div>
                    </div>
                    <div className={style.bottom}>
                      <span>{entry.title}</span>
                    </div>
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
