type Mods = Record<string, boolean | string>;

export const classNames = (rootClass: string, mods?: Mods, additional?: Array<string> ): string => {
  return [
    rootClass,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([_, value]) => !!value)
      .map(([key, _]) => key),
  ].join(' ');
};