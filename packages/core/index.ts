import { makeInstaller } from "@nekona-ui-test/utils";
import components from "./components";
import '@nekona-ui/theme/index.css'

const install = makeInstaller(components);

export * from "../components"
export default install