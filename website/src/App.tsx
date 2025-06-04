// import React from 'react';
import { QListRadio } from "shkfdx-ui"

const App = () => {
  return (
    <div className="content">
      <QListRadio
        value="1"
        options={[
          { label: "1", },
          { label: "2", isTrue: true },
          { label: "3" },
          { label: "4" },
        ]}
      />
    </div>
  );
};

export default App;
