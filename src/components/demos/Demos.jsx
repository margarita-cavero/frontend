import { Audiobook } from "./audiobook/Audiobook";
import { Dubbing } from "./dubbing/Dubbing";
import { Locution } from "./locution/Locution";

export const Demos = () => {
  return (
    <>
      <Dubbing />
      <Locution />
      <Audiobook />
    </>
  )
}
