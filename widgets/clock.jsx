import { createPoll } from "ags/time";
// import { Variable } from "astal";

export default function Clock() {
  
  const clock = createPoll("", 1000, () => new Date().toLocaleTimeString());
  return <label label={clock} />;
}
