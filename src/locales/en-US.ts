import homeViewLocales from '~/views/home/locales/en-US'
import notFoundViewLocales from '~/views/not-found/locales/en-US'
import userCenterViewLocales from '~/views/user-center/locales/en-US'
import userLoginViewLocales from '~/views/user-login/locales/en-US'
import banHistoryViewLocales from '~/views/ban-history/locales/en-US'

export default {
  'global.create': 'Create',
  'global.cancel': 'Cancel',
  'global.confirm.yes': 'Yes',
  'global.confirm.no': 'No',
  'global.delete': 'Delete',
  'global.edit': 'Edit',
  'global.refresh': 'Refresh',
  'global.copy': 'Copy',
  'global.form.submit': 'Submit',
  'global.form.empty': 'Empty',

  'global.peerFlags.flags.P': 'μtp',
  'global.peerFlags.flags.d':
    "Your client wants to download, but peer doesn't want to send (interested and choked)",
  'global.peerFlags.flags.D': 'Currently downloading (interested and not choked)',
  'global.peerFlags.flags.u':
    "Peer wants your client to upload, but your client doesn't want to (interested and choked)",
  'global.peerFlags.flags.U': 'Currently uploading (interested and not choked)',
  'global.peerFlags.flags.K': 'Peer is unchoking your client, but your client is not interested',
  'global.peerFlags.flags.?': 'Your client unchoked the peer but the peer is not interested',
  'global.peerFlags.flags.O': 'Optimistic unchoke',
  'global.peerFlags.flags.S': 'Peer is snubbed',
  'global.peerFlags.flags.I': 'Peer is an incoming connection',
  'global.peerFlags.flags.H': 'Peer was obtained through DHT',
  'global.peerFlags.flags.X': 'Peer was included in peerlists obtained through Peer Exchange (PEX)',
  'global.peerFlags.flags.L':
    'Peer is local (discovered through network broadcast, or in reserved local IP ranges)',
  'global.peerFlags.flags.E': 'Peer is using Protocol Encryption (all traffic)',
  'global.peerFlags.flags.e': 'Peer is using Protocol Encryption (handshake)',

  'footer.settings': 'Settings',
  'footer.settings.selectLanguage': 'Select Language',
  'footer.info.webuiVersion': 'WebUI Version',
  'footer.info.lastBuildTime': 'Last Build Time',

  'header.router.home': 'Home',
  'header.router.banHistory': 'Ban History',
  'header.router.submissionRecords': 'Submission Records',
  'header.router.featureDiscovery': 'Feature Discovery',
  'header.router.tracker': 'Tracker',
  'header.router.user': 'User',
  'header.router.user.userCenter': 'User Center',
  'header.router.user.login': 'Login',
  'header.router.user.logout': 'Logout',

  ...homeViewLocales,
  ...notFoundViewLocales,
  ...userCenterViewLocales,
  ...userLoginViewLocales,
  ...banHistoryViewLocales
}
