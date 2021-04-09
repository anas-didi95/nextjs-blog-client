import React from "react"
import Image from "next/image"

const ProfileInfo: React.FC<{}> = () => {

  return (
    <>
      <figure className="image is-128x128 mb-5">
        <Image
          src="/images/profile-pic.jpg"
          alt="Profile picture"
          width={128}
          height={128}
          className="is-rounded"
        />
      </figure>
      <div className="mb-5">
        <p className="title is-4">Anas Juwaidi Bin Mohd Jeffry</p>
        <p className="subtitle is-5">Software Engineer</p>
      </div>

    </>
  )
}

export default ProfileInfo
