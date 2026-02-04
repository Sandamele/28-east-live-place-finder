import { getLatLongFromAddress } from "../services/getLatLongFromAddress.js";
import { getPlaces } from "../services/getPlaces.js";

export const locationController = async (req, res) => {
  try {
    const { placeType, address } = req.body;
    const errors = {};
    if (placeType === "" || !placeType) {
      errors["placeType"] = "placeType is required";
    }
    if (address === "" || !address) {
      errors["address"] = "address is required";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ data: null, error: errors });
    }

    let latLngCoordinates;
    try {
      latLngCoordinates = await getLatLongFromAddress(address);
    } catch (geoError) {
      return res.status(404).json({
        data: null,
        error: geoError.message || "Could not find address location.",
      });
    }

    const { lat, lng } = latLngCoordinates;

    try {
      const { places } = await getPlaces(placeType, lat, lng, 5000, 20);
      return res.status(200).json({
        data: places || [],
        error: null,
      });
    } catch (error) {
      return res.status(502).json({
        data: null,
        error: "Failed to get nearby places.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ data: null, error: error });
  }
};
