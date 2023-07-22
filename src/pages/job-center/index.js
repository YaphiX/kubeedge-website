import React from "react";
import { Row, Col } from "antd";
import Layout from "@theme/Layout";
import { usePluginData } from "@docusaurus/useGlobalData";
import JobCard from "@site/src/components/jobCard";
import Translate from "@docusaurus/Translate";
import "./index.scss";

export default function JobCenter() {
  const { jobcenterGlobalData } = usePluginData("jobcenter-global-dataPlugin");

    return (
        <Layout>
            <div className="job-center-container">
                <h1>
                    <Translate>Job Center</Translate>
                </h1>
                <div className="job-list">
                    <Row gutter={[24, 24]}>
                        {jobcenterGlobalData.map((item) => (
                            <Col sm={24} md={12} lg={6}>
                                <JobCard
                                    title={item.metadata?.title}
                                    subTitle={item.metadata?.frontMatter?.subTitle}
                                    date={item.metadata?.formattedDate}
                                    desc={item.metadata?.description}
                                    imgUrl={item.metadata?.frontMatter?.background}
                                    link={item.metadata?.permalink}
                                    tags={item.metadata?.frontMatter?.tags}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </Layout>
    );
}
