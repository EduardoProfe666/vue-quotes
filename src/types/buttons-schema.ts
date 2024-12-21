import {DefineComponent, PropType} from "vue";

export interface ButtonsSchema {
    previousText?: string;
    previousIcon?: IconComponent;
    nextText?: string;
    nextIcon?: IconComponent;
    exportText?: string;
    exportActiveText?: string;
    exportIcon?: IconComponent;
    exportSuccessNotification?: string;
    exportFailedNotification?: string;
    lightModeTooltipText?: string;
    lightModeIcon?: IconComponent;
    darkModeTooltipText?: string;
    darkModeIcon?: IconComponent;
    socialButtonEnabled: boolean;
    socialButtonText?: string;
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