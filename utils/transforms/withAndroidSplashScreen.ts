const { AndroidConfig, withStringsXml } = require('@expo/config-plugins')

const withAndroidSplashScreen = expoConfig =>
  withStringsXml(expoConfig, modConfig => {
    modConfig.modResults = AndroidConfig.Strings.setStringItem(
      [
        {
          _: 'true',
          $: {
            name: 'expo_splash_screen_status_bar_translucent',
            translatable: 'false',
          },
        },
      ],
      modConfig.modResults
    )
    return modConfig
  })

module.exports = withAndroidSplashScreen
