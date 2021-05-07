import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {

    const [languageSelection, setLanguageSelection] = useState('Es');

    const displayEnglish = (value) =>{
        setLanguageSelection('En');
	}
    const displayEspañol = (value) =>{
        setLanguageSelection('Es');
	}
    const displayPortugues = (value) =>{
        setLanguageSelection('Pt');
	}
      
    return (
        <AppContext.Provider value={{
				languageSelection,
                displayEnglish,
                displayEspañol,
                displayPortugues
                
            }}>{children}</AppContext.Provider>)
}

export default useAppContext