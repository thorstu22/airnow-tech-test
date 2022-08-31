import React from "react"
// import {data} from "../installed.json"
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const paragraphStyles = {
  marginBottom: 48,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}
const links = [
  {
    text: "installed",
    url: "",
    description:"",
    color: "#E95800",
  },
  {
    text: "Uninstalled",
    url: "",
    description:"",
    color: "#E95800",
  },
]
function RenderSDKs() {
        return (
          <div className="installed">
            <installed-SDKs/>
          </div>
  )}

const HomePage = () => {
  return (
    <main style={pageStyles}>
      <p style={paragraphStyles}>
        latest Update: latestUpdatedDate //add date here
      </p>
    </main>
  )
}

export default HomePage

export const Head = () => <title>Home Page</title>
