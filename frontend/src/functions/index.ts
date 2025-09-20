const fetchStore = (key: string) => {
    return typeof window !== "undefined" ? localStorage.getItem(`${key}`) : null
}

const persistStore = (key: string, data: string) => {
    return localStorage.setItem(`${key}`, data)
}

const removeStore = (key: string) => {
    return localStorage.removeItem(`${key}`)
}

export {
    fetchStore,
    persistStore,
    removeStore,
}