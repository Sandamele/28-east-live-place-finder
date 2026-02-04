import { FormGroup } from "../ui/FormGroup";
import { Input } from "../ui/Input";
import { Dropdown } from "../ui/Dropdown";
import { Button } from "../ui/Button";
import "./Form.css";
import { placeTypes } from "../../data/placeTypes";
export default function Form({
  form,
  handleChange,
  handleSubmit,
  errors,
  loading,
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Live Place Finder</h1>
      <div>
        <FormGroup label="Place Type" error={errors.placeType}>
          <Dropdown
            items={placeTypes}
            placeholder="Select place type"
            value={form.placeType}
            name={"placeType"}
            id="placeType"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup label="Address" htmlFor="address" error={errors.address}>
          <Input
            placeholder="street address, city, province"
            value={form.address}
            name={"address"}
            id={"address"}
            onChange={handleChange}
          />
        </FormGroup>
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Look For Place"}
      </Button>
    </form>
  );
}
