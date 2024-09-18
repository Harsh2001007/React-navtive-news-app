import Icon from 'react-native-vector-icons/Ionicons';

export const icon = {
  index: ({color, focused}) =>
    focused ? (
      <Icon name="home" size={24} color={color} />
    ) : (
      <Icon name="home-outline" size={24} color={color} />
    ),
  discover: ({color, focused}) =>
    focused ? (
      <Icon name="compass" size={25} color={color} />
    ) : (
      <Icon name="compass-outline" size={25} color={color} />
    ),
  saved: ({color, focused}) =>
    focused ? (
      <Icon name="bookmarks" size={22} color={color} />
    ) : (
      <Icon name="bookmarks-outline" size={22} color={color} />
    ),
  settings: ({color, focused}) =>
    focused ? (
      <Icon name="settings" size={24} color={color} />
    ) : (
      <Icon name="settings-outline" size={24} color={color} />
    ),
};
