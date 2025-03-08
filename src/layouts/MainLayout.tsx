//layouts/: ページ全体のレイアウトを担当するコンポーネント

import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ margin: "0 auto", maxWidth: "800px", padding: "20px" }}>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
