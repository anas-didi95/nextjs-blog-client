import React from "react"
import Image from "next/image"
import metadataJson from "../utils/constants/metadata.json"
import styles from "../../styles/ProfileInfo.module.css"

const ProfileInfo: React.FC<{}> = () => (
  <>
    <figure className={`image mb-4 ${styles.image}`}>
      <Image
        src="/images/profile-pic.jpg"
        alt="Profile picture"
        width={128}
        height={128}
        className="is-rounded"
      />
    </figure>
    <div className={`mb-5 ${styles.label}`}>
      <p className="title is-4">{metadataJson.fullname}</p>
      <p className="subtitle is-5">{metadataJson.position}</p>
    </div>
  </>
)

export default ProfileInfo
