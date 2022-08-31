import React from "react";
import {data} from "../installed.json"

const TableHeader = () => {
  return (
    <header className="header">
      <h2>installed</h2> //add link//
      <h2>uninstalled</h2> //add link//
    </header>
  );
};
export const installedSDKs = () => {
  return (
    <>
      <TableHeader />
      <div className="SDK-container">
        {data.map((data, key) => {
          return (
            <div key={key}>
              <data
                key={key}
                name={data.name}
                catagories={data.catagories}
                LastSeenDate={data.LastSeenDate}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
console.log(data)
  const SDKTable = ({ name, catagories, LastSeenDate }) => {
    if (!catagories) return <div />;
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h5>{catagories}</h5>
            </td>
            <td>
              <h5>{name}</h5>
            </td>
            <td>
              <h4>{LastSeenDate}</h4>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
