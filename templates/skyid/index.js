// Import SkynetClient from the Skynet BrowserJS library
import { SkynetClient } from 'skynet-js'

// Create a Default Skynet client
const client = new SkynetClient('https://siasky.net')

// uploadAvatar uploads the avatar file to Skynet
window.uploadAvatar = async function () {
  // Get avatar file
  const avatar = document.getElementById('avatar').files[0]
  try {
    // Check if there is a new file selected
    if (avatar) {
      // Upload the avatar image and update the DOM Element with the Skylink
      const link = await client.uploadFile(avatar)
      // Display the Skylink to the User
      const avatarskylink = '/' + link.replace('sia:', '')
      document.getElementById('skylink').href = avatarskylink
      document.getElementById('skylink').text = avatarskylink
      return avatarskylink
    }
  } catch (error) {
    alert('Skynet Upload Error: ' + error)
  }
}
