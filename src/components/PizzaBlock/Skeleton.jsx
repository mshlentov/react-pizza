import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="123" cy="126" r="107" /> 
    <rect x="17" y="248" rx="10" ry="10" width="221" height="20" /> 
    <rect x="17" y="284" rx="10" ry="10" width="221" height="69" /> 
    <rect x="20" y="361" rx="10" ry="10" width="75" height="24" /> 
    <rect x="164" y="362" rx="10" ry="10" width="75" height="24" />
  </ContentLoader>
)

export default Skeleton

