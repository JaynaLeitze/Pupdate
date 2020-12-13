import React from "react";
import { VetContext } from "./VetProvider";

export const VetDetails = (props) => {
  const { vet, getVetById } = useContext(VetContext);
  const vetId = props.match.params.vetId;
  const [vet, setVet] = useState([]);

  useEffect(() => {
    getVetById(vetId).then(setVet);
    getVets();
  }, []);

  return (
    <section className="vetCard">
      <h3>Veterinarian</h3>
      <div className="vetName">{vet.vetName}</div>
      <div className="vetAddress">
        <address>
          {vet.addressLine1}
          <p>
            {vet.addressLine2}
            <br>
              {vet.city},{vet.state} {vet.zip}{" "}
            </br>
          </p>
        </address>
      </div>
      <div className="vetPhone">{vet.phone}</div>
      <div className="vetEmail">{vet.email}</div>
      <div className="vetWebsite">{vet.website}</div>
    </section>
  );
};
