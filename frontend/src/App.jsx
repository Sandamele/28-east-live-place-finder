import "./App.css";
import Form from "./components/Form";
import { ListPlace } from "./components/ListPlaces";
import { ViewPlace } from "./components/ViewPlaces";
import { usePlace } from "./hook/usePlace";
function App() {
  const { form, handleChange, handleSubmit, errors, loading, places } =
    usePlace();
  return (
    <>
      <title>Find A Place</title>
      <div className="container">
        <Form
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          loading={loading}
        />
        <ViewPlace places={places} />
        {places.length > 0 && <ListPlace places={places} />}
      </div>
    </>
  );
}

export default App;
