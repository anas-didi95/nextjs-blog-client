import React from "react"
import Image from "next/image"
import metadataJson from "../utils/constants/metadata.json"

const ProfileInfo: React.FC<{}> = () =>
(
  <>
    <figure className="image mb-4 profileinfo-image">
      <Image
        src="/images/profile-pic.jpg"
        alt="Profile picture"
        width={128}
        height={128}
        className="is-rounded"
      />
    </figure>
    <div className="mb-5 profileinfo-label">
      <p className="title is-4">{metadataJson.fullname}</p>
      <p className="subtitle is-5">{metadataJson.position}</p>
    </div>
  </>
)

export default ProfileInfo
