"use client"

interface  NextThemeProviderProps{
    children:React.ReactNode,
    attribute:string,
    defaultTheme:string,
    enableSystem:boolean;
}

import * as React from "react"
import { ThemeProvider } from "next-themes"


const NextThemeProvider:React.FC<NextThemeProviderProps> = ({ children,...props}) => {
    return <ThemeProvider {...props}>{children}</ThemeProvider>
    }
export default  NextThemeProvider