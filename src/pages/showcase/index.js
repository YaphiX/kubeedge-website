import React from "react";
import { Row, Col } from "antd";
import Layout from "@theme/Layout";
import { usePluginData } from "@docusaurus/useGlobalData";
import CaseCard from "@site/src/components/caseCard";
import Translate from "@docusaurus/Translate";
import "./index.scss";

export default function ShowCase() {
  const { showcaseGlobalData } = usePluginData("showcase-global-dataPlugin");

  return (
    <Layout>
      <div className="case-center-container">
        <h1>
          <Translate>Case Center</Translate>
        </h1>
        <div className="case-list">
          <Row gutter={[24, 24]}>
            {showcaseGlobalData.map((item) => (
              <Col sm={24} md={12} lg={6}>
                <CaseCard
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
