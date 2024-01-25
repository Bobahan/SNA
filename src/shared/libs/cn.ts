type Mode = Record<string, boolean | string>;

export const cn = (mainClass: string, mods?: Mode, additional?: Array<string>): string => {
  return [
    mainClass,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key),
  ].join(' ');
};
