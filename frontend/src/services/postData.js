export const postData = async (path, payload) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/${path}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        error.error || `Error: ${response.status} ${response.statusText}`,
      );
    }

    const noContent = response.status === 204;
    const data = noContent ? {} : await response.json();

    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};
