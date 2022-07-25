import { Audiobook } from "./audiobook/Audiobook";
import { Dubbing } from "./dubbing/Dubbing";
import { Locution } from "./locution/Locution";
import { Singer } from "./singer/Singer";

export const Demos = () => {
  return (
    <>
      <Dubbing />
      <Locution />
      <Audiobook />
      <Singer />
    </>
  )
}
