export enum TagsEnum {
    DOSPORT = 'dosport',
    TAKEANAP = 'takeanap',
}

export type TagType = typeof TagsEnum[keyof typeof TagsEnum]
