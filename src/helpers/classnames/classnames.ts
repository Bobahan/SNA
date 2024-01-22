// cls главный класс
// mods объект где ключ - название класса, значение - булеан флаг

type Mods = Record<string, boolean | string>;

const obj: Mods = {
  hovered: true,
  selectable: true,
  red: false,
};

export const classnames = (cls: string, mods: Mods, additional: Array<string>): string => {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key),
  ].join(' ');
};

// classnames('remove-btn', { hovered: true, selectable: true }) => получаем класс remove-btn hovered selectable
