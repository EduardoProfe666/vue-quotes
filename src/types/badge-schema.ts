import {IconComponent} from "./buttons-schema.ts";

export default interface BadgeSchema{
    id: string;
    name: string;
    icon?: IconComponent;
    background: string;
    backgroundDark: string;
    text: string;
    textDark: string;
}