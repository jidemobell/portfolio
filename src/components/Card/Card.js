import React,{ useRef } from "react";
import HoverVideoPlayer from "react-hover-video-player";

import { brands } from "../../utils/image";

import Spinner from "../Spinner"

export default function SkillCard(props) {
  const wrapperLinkRef = useRef()
  return (
    <div className="skill-container centered flex-col hvr-grow" ref={wrapperLinkRef}>
      <section>
        <HoverVideoPlayer
          className="player-wrapper"
          videoClassName="player-video"
          videoSrc={props.preview}
          pausedOverlay={<img src={props.image} alt="card" className="overlay-image" />}
          // loadingOverlay={<Spinner />}
          // overlayTransitionDuration={500}
          hoverTargetRef={wrapperLinkRef}
        />
      </section>
      <p>{props.title.toUpperCase()}</p>
      <p>
        {props.position}&nbsp;DEVELOPER &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp;
        {props.mode}
      </p>
      <div className="flex-r preview">
        <span>
          <a
            href={props.source}
            className="links"
            target="_blank"
            rel="noopener noreferrer"
          >
            SOURCE
          </a>
        </span>
        <span>
          <a
            href={props.view}
            className="links"
            target="_blank"
            rel="noopener noreferrer"
          >
            PREVIEW
          </a>
        </span>
      </div>
      <div className="icon-box flex-r">
        {props.tools.map((entry) => {
          return <img src={brands[entry]} alt="tools" key={`brand-${entry}`} />;
        })}
      </div>
    </div>
  );
}
