const defaultApiBaseUrl = "https://eyeshade-photography-183236936603.us-central1.run.app";

export const apiBaseUrl = (
    import.meta.env.VITE_API_BASE_URL || defaultApiBaseUrl
).replace(/\/$/, "");
