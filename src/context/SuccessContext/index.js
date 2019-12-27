import React from 'react'

const SuccessContext = React.createContext(false)

export function useSuccess() {
    const context = React.useContext(SuccessContext)
    if (!context) {
        throw new Error(`useSuccess must be used within a SuccessProvider`)
    }
    return context
}

export function SuccessProvider(props) {
    const [success, setSuccess] = React.useState(false)
    const value = React.useMemo(() => [success, setSuccess], [success])
    return <SuccessContext.Provider value={value} {...props} />
}
