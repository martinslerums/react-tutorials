import { useParams } from "react-router-dom"


const ProfilePage = () => {

  const params = useParams<{profileID: string}>()
  console.log(params)

  return (
    <div>ProfilePage {params.profileID} </div>
  )
}

export default ProfilePage