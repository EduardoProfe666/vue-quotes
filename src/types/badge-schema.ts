import {IconComponent} from "./buttons-schema.ts";
import InternationalizationSchema from "./internationalization-schema.ts";

export default interface BadgeSchema{
    id: string;
    name: string | InternationalizationSchema[];
    icon?: IconComponent;
    background: string;
    backgroundDark: string;
    text: string;
    textDark: string;
}