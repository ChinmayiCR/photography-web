const imagesApiUrl = import.meta.env.VITE_IMAGES_API_URL || "https://localhost:8443/user/images";

export async function fetchImages() {
    const response = await fetch(imagesApiUrl);

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return Array.isArray(data) ? data : data.images;
}
