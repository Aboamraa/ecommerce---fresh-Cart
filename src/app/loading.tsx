import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
  return (
    <div className=" flex justify-center items-center h-screen ">
      <FontAwesomeIcon
        icon={faSpinner}
        className="text-main-green h-8 w-8 animate-spin my-8 "
      />
    </div>
  );
}
