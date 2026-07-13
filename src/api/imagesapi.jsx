import {apiBaseUrl} from "./config.js";

const imagesApiUrl = `${apiBaseUrl}/user/images`;

export async function fetchImages() {
    const response = await fetch(imagesApiUrl);

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return Array.isArray(data) ? data : data.images;
}
