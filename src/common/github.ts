export interface GithubRelease {
  url: string
  html_url: string
  id: number
  name: string
  assets: GithubReleaseAsset[]
}

export interface GithubReleaseAsset {
  url: string
  name: string
  browser_download_url: string
}
export async function getLatest(): Promise<GithubRelease> {
  const res = await fetch('https://api.github.com/repos/TomBebb/Gami/releases/latest')
  return res.json()
}

export type Platform = 'linux' | 'windows' | 'macos'

// from https://wicg.github.io/ua-client-hints/#sec-ch-ua-platform-version
const userAgentCodes: Record<string, Platform> = {
  Linux: 'linux',
  Windows: 'windows',
  macOS: 'macos'
}
export async function getLatestLink(): Promise<string> {
  const latestRel = await getLatest()
  let myPlatform: Platform | undefined
  // @ts-ignore
  if (navigator?.userAgentData?.platform)
    // @ts-ignore
    myPlatform = userAgentCodes[navigator.userAgentData!.platform]
  else if (navigator.platform === 'Linux x86_64') {
    myPlatform = 'linux'
  } else if (navigator.platform === 'Win32') {
    myPlatform = 'windows'
  } else if (navigator.platform.startsWith('Mac')) {
    myPlatform = 'macos'
  }
  if (!myPlatform) return latestRel.html_url

  const zipName = `${myPlatform}.zip`
  const res = latestRel.assets.find((a) => a.name === zipName)
  return res?.browser_download_url ?? latestRel.html_url
}
