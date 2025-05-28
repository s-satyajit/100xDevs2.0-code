import { useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "../store/atoms/atoms"

export const MyApp = () => {

  const netWorkNotification = useRecoilValue(networkAtom)
  const jobsNotification = useRecoilValue(jobsAtom)
  const messagingNotification = useRecoilValue(messagingAtom)
  const notification = useRecoilValue(notificationAtom)
  const totalNotification = useRecoilValue(totalNotificationSelector)

  return (
    <>
      <button>Home</button>
      <button>My Network ({netWorkNotification >= 100 ? "99+" : netWorkNotification})</button>
      <button>Jobs ({jobsNotification})</button>
      <button>Messaging ({messagingNotification})</button>
      <button>Notification ({notification})</button>
      <button>Me ({totalNotification})</button>
    </>
  )
}