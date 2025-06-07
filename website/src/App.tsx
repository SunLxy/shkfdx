// import React from 'react';
import { QItem } from "shkfdx-ui"

const App = () => {
  return (
    <div className="content">
      <QItem
        isRead
        topic={["题目内容32二次"]}
        options={[
          { label: "1", },
          { label: "2", isTrue: true },
          { label: "3" },
          { label: "4" },
        ]}
        sort={1}
      />
      <QItem
        isRead
        topic={["题目内容32二次"]}
        options={[
          { label: "1", },
          { label: "2", isTrue: true },
          { label: "3" },
          { label: "4" },
        ]}
        sort={2}
      />
      <QItem
        isRead
        topic={["题目内容32二次"]}
        options={[
          { label: "1", },
          { label: "2", isTrue: true },
          { label: "3" },
          { label: "4" },
        ]}
        sort={3}
      />
      <QItem
        isRead
        topic={["题目内容32二次"]}
        isInput
        answer="dddddd"
        sort={4}
      />
    </div>
  );
};

export default App;
