import "../styles/stories.scss";
import Story from "./Story";
import { ScrollLink } from "react-scroll";

function Stories() {
  return (
    <div className="stories">
      <ScrollLink className="scroll" reverseScroll={true}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </ScrollLink>
    </div>
  );
}

export default Stories;