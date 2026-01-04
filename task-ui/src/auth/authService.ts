export const authenticate = (
    userId: string,
    password: string
): boolean => {
    switch (userId) {
        case "admin":
            return password === "password";
        case "guest":
            return password === "guest";
        default:
            return false;
    }
};
