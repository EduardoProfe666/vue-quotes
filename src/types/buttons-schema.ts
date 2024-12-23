import {DefineComponent, PropType} from "vue";
import InternationalizationSchema from "./internationalization-schema.ts";

export interface ButtonsSchema {
    previousText?: string | InternationalizationSchema[];
    previousIcon?: IconComponent;
    nextText?: string | InternationalizationSchema[];
    nextIcon?: IconComponent;
    exportText?: string | InternationalizationSchema[];
    exportActiveText?: string | InternationalizationSchema[];
    exportIcon?: IconComponent;
    exportSuccessNotification?: string | InternationalizationSchema[];
    exportFailedNotification?: string | InternationalizationSchema[];
    lightModeTooltipText?: string | InternationalizationSchema[];
    lightModeIcon?: IconComponent;
    darkModeTooltipText?: string | InternationalizationSchema[];
    darkModeIcon?: IconComponent;
    socialButtonEnabled: boolean;
    socialButtonText?: string | InternationalizationSchema[];
    socialButtonIcon?: IconComponent;
    socialButtonLink?: string;
}

export type IconComponent =  DefineComponent<{
    weight: {
        type: PropType<"bold" | "fill" | "thin" | "light" | "regular" | "duotone">;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
    };
    color: {
        type: StringConstructor;
    };
    mirrored: {
        type: BooleanConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    weight: {
        type: PropType<"bold" | "fill" | "thin" | "light" | "regular" | "duotone">;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
    };
    color: {
        type: StringConstructor;
    };
    mirrored: {
        type: BooleanConstructor;
    };
}>>, {
    mirrored: boolean;
}, {}>