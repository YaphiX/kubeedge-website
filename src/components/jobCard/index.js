import React from "react";
import { useHistory } from "@docusaurus/router";
import "./styles.scss";

export default function JobCard(props) {
    const {
        title = "",
        subTitle = "",
        date = "",
        desc = "",
        imgUrl = "",
        link = "",
        tags = [],
    } = props;
    const history = useHistory();

    return (
        <div className="job-card" onClick={() => history.push(link)}>
            <div className="image">
                <img src={imgUrl} />
            </div>
            <div className="title">
                <div className="main">
                    <h2>{title}</h2>
                </div>
                <h3 className="sub">{subTitle}</h3>
            </div>
            <div className="desc">{desc}</div>
            <div className="date">{date}</div>
            <div className="tags">
                {tags.map((item, index) => (
                    <div className="tag" key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
