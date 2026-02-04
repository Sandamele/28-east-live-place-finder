export const getPlaces = async (
  placeTypes,
  lat,
  lng,
  radius = 2000,
  maxResultCount = 10,
) => {
  const url = `${process.env.PLACES_URL}/v1/places:searchNearby`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.GOOGLE_API_KEY,
        "X-Goog-FieldMask": [
          "places.displayName",
          "places.location",
          "places.formattedAddress",
          "places.rating",
        ],
      },
      body: JSON.stringify({
        includedTypes: [placeTypes.toLowerCase()],
        maxResultCount,
        rankPreference: "DISTANCE",
        locationRestriction: {
          circle: {
            center: {
              latitude: lat,
              longitude: lng,
            },
            radius,
          },
        },
      }),
    });
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        error?.error?.message ||
          `Request failed with status ${response.status}`,
      );
    }
    const data = await response.json();
    return { places: data.places || [] };
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
