import BrowseRouter from "./BrowseRouter";
import ViewPatientList from "./components/ViewPatientList";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram, faFacebookF, faLinkedinIn);
<BrowseRouter path="/doctor/:hhNumber/patients" element={<ViewPatientList />} />


function App() {
  return (
    <div>
      <BrowseRouter></BrowseRouter>
    </div>
  );
}

export default App;
