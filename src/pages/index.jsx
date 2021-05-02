import * as React from "react";

import Layout from "../components/Layout/layout.jsx";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="דף הבית" defer={false} />
      <main>
        <h1>כותרת ראשית</h1>
      </main>
    </Layout>
  );
};

export default IndexPage;
