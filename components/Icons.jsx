import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export const HomeIcon = (props) => {
  return <MaterialIcons name="home-filled" size={24} color="white" {...props} />
}

export const InfoIcon = (props) => {
  return (
    <MaterialIcons name="info-outline" size={24} color="black" {...props} />
  )
}

export const LightModeIcon = (props) => {
  return <MaterialIcons name="light-mode" size={24} color="white" {...props} />
}

export const DarkModeIcon = (props) => {
  return <MaterialIcons name="dark-mode" size={24} color="black" {...props} />
}

export const SearchIcon = (props) => {
  return <MaterialIcons name="search" size={24} color="black" {...props} />
}
