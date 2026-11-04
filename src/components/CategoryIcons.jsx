
import React from "react";

const iconClass = "h-8 w-8";

export const IconSpice = () => (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 3c-2 3-5 5-5 9a5 5 0 0 0 10 0c0-4-3-6-5-9" />
        <path d="M12 3c2 3 5 5 5 9" />
        <path d="M9 15c1 2 3 3 5 3" />
    </svg>
);

export const IconPickle = () => (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M5 4h14v16H5z" />
        <path d="M8 4V2m8 2V2" />
        <path d="M8 9h8m-8 4h8m-8 4h5" />
    </svg>
);

export const IconChutney = () => (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M4 9h16l-2 11H6z" />
        <path d="M3 9a9 9 0 0 1 18 0" />
        <path d="M12 3v3m-5-2 2 3m8-3-2 3" />
    </svg>
);

export const IconOther = () => (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
    </svg>
);
