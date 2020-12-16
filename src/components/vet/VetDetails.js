import React from "react";
import { VetContext } from "./VetProvider";

export const VetDetails = (props) => {
  const { vet, getVetById } = useContext(VetContext);
  const vetId = props.match.params.vetId;
  const [vet, setVet] = useState([]);

  useEffect(() => {
    getPets()
      .then(() => getRecordByPetId(petId))
      .then(setVet);
  }, []);

  return (
    <section className="vetCard">
      <h3>Veterinarian</h3>

      {vetRecords.length > 0 ? (
        <>
          <div>{vet.vet.vetName}</div>
          <div>{vet.vet.addressLine1}</div>
          <div>{vet.vet.addressLine2}</div>
          <div>
            {vet.vet.city}, {vet.vet.state} {vet.vet.zip}
          </div>
          <div>{vet.vet.phone}</div>
          <div>{vet.vet.email}</div>
          <div>{vet.vet.website}</div>
        </>
      ) : (
        <>
          <div>
            <Link to={"/vets/create"}>
              <button>Add Veterinarian</button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};
