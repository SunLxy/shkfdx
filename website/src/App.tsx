// import React from 'react';
import { QListRadio, QItem } from "shkfdx-ui"

const App = () => {
  return (
    <div className="content">
      <QItem
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
        topic={["题目内容32二次"]}
        options={[
          { label: "1", },
          { label: "2", isTrue: true },
          { label: "3" },
          { label: "4" },
        ]}
        sort={4}
      />
      {/* <QListRadio
        value="1"
        options={[
          { label: "1", },
          { label: "2", isTrue: true },
          { label: "3" },
          { label: "4" },
        ]}
      /> */}
    </div>
  );
};

export default App;
