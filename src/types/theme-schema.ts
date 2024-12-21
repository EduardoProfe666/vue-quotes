export default interface ThemeSchema {
    darkMode: ThemeData;
    lightMode: ThemeData;
}

export interface ThemeData{
    name: string;
    backgroundColor: string;
    textColor: string;
    authorColor: string;
    buttonTextColor: string;
    buttonIconColor: string;
}