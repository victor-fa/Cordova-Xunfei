cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-xunfeiListenSpeaking.xunfeiListenSpeaking",
    "file": "plugins/cordova-plugin-xunfeiListenSpeaking/www/cordova-plugin-xunfeiListenSpeaking.js",
    "pluginId": "cordova-plugin-xunfeiListenSpeaking",
    "clobbers": [
      "xunfeiListenSpeaking"
    ]
  },
  {
    "id": "cordova-plugin-android-permissions.Permissions",
    "file": "plugins/cordova-plugin-android-permissions/www/permissions.js",
    "pluginId": "cordova-plugin-android-permissions",
    "clobbers": [
      "cordova.plugins.permissions"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-xunfeiListenSpeaking": "0.0.1",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-android-permissions": "1.0.0"
};
// BOTTOM OF METADATA
});