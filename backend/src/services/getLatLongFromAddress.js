export const getLatLongFromAddress = async (address) => {
  const url = `${process.env.GEOCODING_URL}/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_API_KEY}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        error?.error?.message ||
          `Request failed with status ${response.status}`,
      );
    }

    const data = await response.json();

    if (data.status === "ZERO_RESULTS") {
      throw new Error("Address not found. Please provide more details.");
    }
    const { lat, lng } = data.results[0].geometry.location;
    return { lat, lng };
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
