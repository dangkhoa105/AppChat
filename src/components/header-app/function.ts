import {objectIsNull} from '../function';

export const getConditions = (iconLeft: any, iconRight: any) => {
  let type: number = -1;
  if (!objectIsNull(iconLeft) && !objectIsNull(iconRight)) {
    type = 0;
  } else if (!objectIsNull(iconLeft) && objectIsNull(iconRight)) {
    type = 1;
  } else if (objectIsNull(iconLeft) && !objectIsNull(iconRight)) {
    type = 2;
  }
  return type;
};

export const getStylesContainer = (
  bg: string | undefined,
  iconLeft: any,
  iconRight: any,
) => {
  let styles: any;
  switch (getConditions(iconLeft, iconRight)) {
    case 0:
      styles = {
        backgroundColor: bg,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
      };
      break;
    case 1:
      styles = {
        backgroundColor: bg,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
      };
      break;
    case 2:
      styles = {
        backgroundColor: bg,
        justifyContent: 'center',
        alignItems: 'center',
      };
      break;
    default:
      styles = undefined;
      break;
  }
  return styles;
};
